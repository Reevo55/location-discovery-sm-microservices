import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';
import { RmqService } from '@app/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Posts', 'Posts API', '1.0', 'posts');
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('POST'));
  const configService = app.get(ConfigService);

  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
