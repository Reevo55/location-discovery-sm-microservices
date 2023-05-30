import { NestFactory } from '@nestjs/core';
import { ReactionsModule } from './reactions.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ReactionsModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Reactions', 'Reactions API', '1.0', 'reactions');

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
