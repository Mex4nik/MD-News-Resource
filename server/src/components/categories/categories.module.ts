import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/components/users/user.model';
import { CategoryController } from './categories.controller';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([User, Category]),
    forwardRef(() => AuthModule),
  ],
  exports: [CategoriesService],
})
export class CategoriesModule {}
