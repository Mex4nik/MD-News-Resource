import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoriesService) {}

  @Get(':id')
  getOne(@Param() params) {
    return this.categoryService.getOneById(params.id);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }
}
