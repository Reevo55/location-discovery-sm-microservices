import { NestFactory } from '@nestjs/core';
import { ReelModule } from './reel.module';

async function bootstrap() {
  const app = await NestFactory.create(ReelModule);
  await app.listen(3000);
}
bootstrap();
