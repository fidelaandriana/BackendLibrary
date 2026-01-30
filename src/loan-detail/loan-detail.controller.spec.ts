import { Test, TestingModule } from '@nestjs/testing';
import { LoanDetailController } from './loan-detail.controller';
import { LoanDetailService } from './loan-detail.service';

describe('LoanDetailController', () => {
  let controller: LoanDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanDetailController],
      providers: [LoanDetailService],
    }).compile();

    controller = module.get<LoanDetailController>(LoanDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
