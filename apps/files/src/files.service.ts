import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
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

    const s3 = this.getS3Object();

    const key = `files/${uuid()}.${contentType}`;

    const parameters = {
      Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
      Key: key,
      ContentType: contentType,
      Expires: Number.parseInt(process.env.AWS_S3_SIGNED_URL_EXPIRATION) || 60,
    };

    const url = s3.getSignedUrl('putObject', parameters);

    return { url, key };
  }

  async deleteFileFromS3(url: string) {
    const s3 = this.getS3Object();

    const key = url.split('.com/')[1];

    const parameters = {
      Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
      Key: key,
    };

    return await s3.deleteObject(parameters).promise();
  }

  private getS3Object() {
    return new S3({
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get('AWS_REGION'),
    });
  }
}
