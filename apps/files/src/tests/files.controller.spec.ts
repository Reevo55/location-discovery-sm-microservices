import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { FilesModule } from '../files.module';
import { FilesService } from '../files.service';

const signedUrl = 'https://example.com/example.jpg';

const deleteObjectResponse = {
  DeleteMarker: true,
  VersionId: 'Fg.js1NmU.aZUtQNLzGyk2SSSeC6PYbi',
};

jest.mock('aws-sdk', () => {
  const instance = {
    getSignedUrl: jest.fn(() => {
      return signedUrl;
    }),
    deleteObject: jest.fn(() => {
      return {
        promise: () => {
          return deleteObjectResponse;
        },
      };
    }),
  };

  return { S3: jest.fn(() => instance) };
});

describe('Files controller - Test', () => {
  let app: INestApplication;
  let agent;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FilesModule, ConfigModule],
      providers: [FilesService],
    })
      .compile();

    app = await module.createNestApplication();
    agent = request(app.getHttpServer());
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  }, 100_000);

  describe('GET', () => {
    it('/files - get signed url', async () => {
      const response = await agent.get('/files?contentType=jpg');

      expect(response.status).toBe(200);
      expect(response.body.url).toBe(signedUrl);
    });

    it('/files - get signed url with invalid content type', async () => {
      const response = await agent.get('/files');

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('CONTENT_TYPE_MISSING_ERROR');
    });
  });

  describe('DELETE', () => {
    const s3Avatar =
      'https://walkie-doggie.s3.eu-central-1.amazonaws.com/62dc619c78c6d5451e73829b/8e552efb-3ab6-4bc3-ae56.jpg';

    it('/files - get signed url', async () => {
      const response = await agent.delete('/files').send({
        image: s3Avatar,
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(deleteObjectResponse);
    });
  });
});
