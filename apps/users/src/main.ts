import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Users', 'Users API', '1.0', 'users');

  await app.listen(3000);
}
bootstrap();
