import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/components/auth/auth.module';
// import { Post } from 'src/posts/posts.model';
import { Role } from 'src/components/roles/role.model';
import { RolesModule } from 'src/components/roles/roles.module';
import { UserRoles } from 'src/components/roles/user-roles.model';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
