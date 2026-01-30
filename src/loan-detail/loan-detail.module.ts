import { Module } from '@nestjs/common';
import { LoanDetailService } from './loan-detail.service';
import { LoanDetailController } from './loan-detail.controller';

@Module({
  controllers: [LoanDetailController],
  providers: [LoanDetailService],
})
export class LoanDetailModule {}
