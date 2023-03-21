import { Controller, Get } from '@nestjs/common';
import { ReactionsService } from './reactions.service';

@Controller()
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @Get()
  getHello(): string {
    return this.reactionsService.getHello();
  }
}
