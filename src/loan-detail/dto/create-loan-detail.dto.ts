import { IsInt, Min } from 'class-validator'

export class CreateLoanDetailDto {
  @IsInt()
  loanId: number

  @IsInt()
  bookId: number

  @IsInt()
  @Min(1)
  qty: number
}
