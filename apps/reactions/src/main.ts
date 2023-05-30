import { NestFactory } from '@nestjs/core';
import { ReactionsModule } from './reactions.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ReactionsModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Reactions', 'Reactions API', '1.0', 'reactions');

  await app.listen(3000);
}
bootstrap();
