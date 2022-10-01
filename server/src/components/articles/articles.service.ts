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

  async create(dto: CreateArticleDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const article = await this.articleRepository.create({
      ...dto,
      mainImage: fileName,
    });
    return article;
  }
}