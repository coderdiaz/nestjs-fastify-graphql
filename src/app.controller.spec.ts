import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('healthCheck', () => {
    it('should return the health check info', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.healthCheck()).toStrictEqual({
        message:'Service is alive',
        status: 200,
      });
    });
  });
});
