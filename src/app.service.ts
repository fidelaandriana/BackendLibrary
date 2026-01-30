import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Fidelaa!';
  }
  getWelcome(): string {
    return 'welcome to backend library';
  }
  getAge(): number{
    return 17;
  }
  tambah (a: number, b: number):
  number {
    return a+b;
  }
}
