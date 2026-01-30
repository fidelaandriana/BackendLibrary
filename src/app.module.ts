import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module'; 
import { LoanService } from './loan/loan.service';
import { LoanModule } from './loan/loan.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LoanDetailModule } from './loan-detail/loan-detail.module';

@Module({
  imports: [BooksModule, MembersModule, PrismaModule, BooksModule, MembersModule, LoanModule, AuthModule, UserModule, LoanDetailModule],
  controllers: [AppController],
  providers: [AppService, LoanService],
}) 
export class AppModule {}


