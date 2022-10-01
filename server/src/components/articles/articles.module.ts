import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/components/users/user.model';
import { ArticlesController } from './articles.controller';
import { Article } from './articles.model';
import { ArticlesService } from './articles.service';
import { FilesModule } from './../files/files.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    SequelizeModule.forFeature([User, Article]),
    FilesModule,
  ],
})
export class ArticlesModule {}
