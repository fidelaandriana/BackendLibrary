import { BooksService } from './books.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UseGuards } from '@nestjs/common'; 
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards'
import { RolesGuard } from '../auth/guards/roles.guards'
import { Roles } from '../auth/decorators/roles.decorator'; 
import { UserRole } from '@prisma/client'; 

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService,) { }

    @UseGuards(JwtAuthGuard, RolesGuard) 
    @Roles(UserRole.ADMIN) 
    @Post()
    create(@Body() dto: CreateBookDto) {
        return this.booksService.create(dto);
    }
    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBookDto) {
        return this.booksService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.remove(id);
    }
}



