import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  healthCheck() {
    return {
      message: 'Service is alive',
      status: 200,
    };
  }
}