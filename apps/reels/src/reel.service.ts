import { Injectable } from '@nestjs/common';

@Injectable()
export class ReelService {
  getHello(): string {
    return 'Hello World!';
  }
}
