import { IsInt, IsOptional, Min } from 'class-validator'

export class CreateLoanDetailDto {
  @IsInt()
  loanId: number

  @IsInt()
  bookId: number

  @IsOptional()
  @IsInt()
  @Min(1)
  qty: number
}
