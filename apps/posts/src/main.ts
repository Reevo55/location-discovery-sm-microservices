import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Posts', 'Posts API', '1.0', 'posts');

  await app.listen(3000);
}
bootstrap();
