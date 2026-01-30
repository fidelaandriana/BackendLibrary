import {Injectable, NotFoundException, ConflictException} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateLoanDetailDto } from './dto/create-loan-detail.dto'
import { UpdateLoanDetailDto } from './dto/update-loan-detail.dto'

@Injectable()
export class LoanDetailService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLoanDetailDto) {
    // pastikan loan ada
    const loan = await this.prisma.loan.findUnique({
      where: { id: dto.loanId },
    })
    if (!loan) throw new NotFoundException('Loan tidak ditemukan')

    // pastikan buku ada
    const book = await this.prisma.book.findUnique({
      where: { id: dto.bookId },
    })
    if (!book) throw new NotFoundException('Buku tidak ditemukan')

    // cegah buku dobel di 1 loan
    const exists = await this.prisma.loanDetail.findUnique({
      where: {
        loanId_bookId: {
          loanId: dto.loanId,
          bookId: dto.bookId,
        },
      },
    })
    if (exists) {
      throw new ConflictException('Buku sudah ada di peminjaman ini')
    }

    return this.prisma.loanDetail.create({
      data: dto,
    })
  }

  async findAll() {
    return this.prisma.loanDetail.findMany({
      include: {
        book: true,
        loan: true,
      },
    })
  }

  async findOne(id: number) {
    const detail = await this.prisma.loanDetail.findUnique({
      where: { id },
      include: {
        book: true,
        loan: true,
      },
    })
    if (!detail) throw new NotFoundException('Loan detail tidak ditemukan')
    return detail
  }

  async update(id: number, dto: UpdateLoanDetailDto) {
    await this.findOne(id)
    return this.prisma.loanDetail.update({
      where: { id },
      data: dto,
    })
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.prisma.loanDetail.delete({ where: { id } })
    return { message: 'Loan detail berhasil dihapus' }
}
}