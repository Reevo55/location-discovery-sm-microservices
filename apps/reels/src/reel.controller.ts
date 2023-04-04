import { Controller, Get, Param } from '@nestjs/common';
import { ReelService } from './reel.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('reels')
@Controller()
export class ReelController {
  constructor(private readonly reelService: ReelService) {}

  @ApiOkResponse({ description: 'Get reel' })
  @Get('reels/:id')
  getReel(@Param('id') id: string): string {
    return 'reel ' + id;
  }
}
