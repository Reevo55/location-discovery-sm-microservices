import { Controller, Get } from '@nestjs/common';
import { ReelService } from './reel.service';

@Controller()
export class ReelController {
  constructor(private readonly reelService: ReelService) {}

  @Get()
  getHello(): string {
    return this.reelService.getHello();
  }
}
