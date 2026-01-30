import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hi')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getWelcome(): string {
    return this.appService.getWelcome();
  }
  @Get('/age')
  getAge(): number {
    return this.appService.getAge();
  }
  @Get('/tambah')
  tambah(): number {
    return this.appService.tambah(15,5)
  }
}