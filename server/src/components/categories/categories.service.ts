import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { Category } from './categories.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categotyRepository: typeof Category,
  ) {}

  async getOneById(id: number) {
    const category = await this.categotyRepository.findByPk(id);
    return category;
  }

  async getAll() {
    const categories = await this.categotyRepository.findAll({
      include: { all: true },
    });
    return categories;
  }

  async create(dto: CreateCategoryDto) {
    try {
      const category = await this.categotyRepository.create(dto);
      return category;
    } catch (error) {
      if (error.original.detail.includes('name'))
        return { message: 'Categoty with this name already exists' };
    }
  }
}
