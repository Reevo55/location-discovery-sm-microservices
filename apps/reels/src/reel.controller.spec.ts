import { Test, TestingModule } from '@nestjs/testing';
import { ReelController } from './reel.controller';
import { ReelService } from './reel.service';

describe('ReelController', () => {
  let reelController: ReelController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReelController],
      providers: [ReelService],
    }).compile();

    reelController = app.get<ReelController>(ReelController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reelController.getHello()).toBe('Hello World!');
    });
  });
});
