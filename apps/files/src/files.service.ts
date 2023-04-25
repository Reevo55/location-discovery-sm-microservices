import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { createRequest } from '@aws-sdk/util-create-request';
import { formatUrl } from '@aws-sdk/util-format-url';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {}

  async getSignedUrl(
    contentType: string,
  ): Promise<{ url: string; key: string }> {
    if (!contentType) {
      throw new Error('No content type');
    }

    const s3Client = this.getS3Client();
    const key = `files/${uuid()}.${contentType}`;

    const params = {
      Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
      Key: key,
      ContentType: contentType,
    };

    const request = await createRequest(s3Client, new PutObjectCommand(params));
    const presigner = new S3RequestPresigner({ ...s3Client.config });
    const expiration =
      Number.parseInt(process.env.AWS_S3_SIGNED_URL_EXPIRATION) || 60;

    const url = formatUrl(
      await presigner.presign(request, { expiresIn: expiration }),
    );

    return {
      url,
      key,
    };
  }

  async deleteFileFromS3(url: string) {
    const s3Client = this.getS3Client();
    const key = url.split('.com/')[1];

    const params = {
      Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
      Key: key,
    };

    await s3Client.send(new DeleteObjectCommand(params));
  }

  private getS3Client() {
    return new S3Client({
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: this.configService.get('AWS_REGION'),
    });
  }
}
