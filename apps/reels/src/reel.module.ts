import { Module } from '@nestjs/common';
import { ReelController } from './reel.controller';
import { ReelService } from './reel.service';

@Module({
  imports: [],
  controllers: [ReelController],
  providers: [ReelService],
})
export class ReelModule {}
