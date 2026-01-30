import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanDetailService } from './loan-detail.service';
import { CreateLoanDetailDto } from './dto/create-loan-detail.dto';
import { UpdateLoanDetailDto } from './dto/update-loan-detail.dto';

@Controller('loan-detail')
export class LoanDetailController {
  constructor(private readonly loanDetailService: LoanDetailService) {}

  @Post()
  create(@Body() createLoanDetailDto: CreateLoanDetailDto) {
    return this.loanDetailService.create(createLoanDetailDto);
  }

  @Get()
  findAll() {
    return this.loanDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanDetailDto: UpdateLoanDetailDto) {
    return this.loanDetailService.update(+id, updateLoanDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanDetailService.remove(+id);
  }
}
