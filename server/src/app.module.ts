import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './components/auth/auth.module';
import { Role } from './components/roles/role.model';
import { RolesModule } from './components/roles/roles.module';
import { UserRoles } from './components/roles/user-roles.model';
import { User } from './components/users/user.model';
import { UsersModule } from './components/users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ArticlesModule } from './components/articles/articles.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ArticlesModule,
  ],
})
export class AppModule {}
