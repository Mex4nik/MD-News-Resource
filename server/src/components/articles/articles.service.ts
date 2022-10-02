import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from 'src/components/articles/articles.model';
import { FilesService } from './../files/files.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article) private articleRepository: typeof Article,
    private fileService: FilesService,
  ) {}

  async getOneById(id) {
    const article = await this.articleRepository.findByPk(id);
    return article;
  }

  async getAll() {
    const articles = await this.articleRepository.findAll({
      include: { all: true },
    });
    return articles;
  }

  async create(dto: CreateArticleDto, image: any) {
    try {
      const fileName = await this.fileService.createFile(image);
      const article = await this.articleRepository.create({
        ...dto,
        image: fileName,
      });
      return article;
    } catch (error) {
      if (error.original.detail.includes('title'))
        return { message: 'Article with this title already exists' };
    }
  }
}
