import { Test, TestingModule } from '@nestjs/testing';
import { ReactionsController } from './reactions.controller';
import { ReactionsService } from './reactions.service';

describe('ReactionsController', () => {
  let reactionsController: ReactionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReactionsController],
      providers: [ReactionsService],
    }).compile();

    reactionsController = app.get<ReactionsController>(ReactionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reactionsController.getHello()).toBe('Hello World!');
    });
  });
});
