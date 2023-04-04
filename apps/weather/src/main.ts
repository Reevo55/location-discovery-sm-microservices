import { NestFactory } from '@nestjs/core';
import { WeatherModule } from './weather.module';
import { SwaggerFactory } from '../../../libs/factories/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(WeatherModule);

  const swaggerSetup = new SwaggerFactory(app);
  swaggerSetup.create('Weather', 'Weather API', '1.0', 'weather');

  await app.listen(3000);
}
bootstrap();
