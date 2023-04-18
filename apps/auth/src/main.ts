import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Auth', 'Auth API', '1.0', 'auth');

  await app.listen(3000);
}
bootstrap();
