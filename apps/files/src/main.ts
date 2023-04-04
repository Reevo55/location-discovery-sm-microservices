import { NestFactory } from '@nestjs/core';
import { FilesModule } from './files.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(FilesModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Files', 'Files API', '1.0', 'files');

  await app.listen(3000);
}
bootstrap();
