import { NestFactory } from '@nestjs/core';
import { ReactionsModule } from './reactions.module';

async function bootstrap() {
  const app = await NestFactory.create(ReactionsModule);
  await app.listen(3000);
}
bootstrap();
