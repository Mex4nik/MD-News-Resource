import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/components/users/user.model';
import { ArticlesController } from './articles.controller';
import { Article } from './articles.model';
import { ArticlesService } from './articles.service';
import { FilesModule } from './../files/files.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    SequelizeModule.forFeature([User, Article]),
    FilesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ArticlesModule {}
