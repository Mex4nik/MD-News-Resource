import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/components/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { banUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(dto);
      const role = await this.roleService.getRoleByValue('ADMIN');
      await user.$set('roles', [role.id]);
      user.roles = [role];
      return user;
    } catch (error) {
      return error.message;
    }
  }

  async getAllusers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException(
      'The user or role do not found',
      HttpStatus.NOT_FOUND,
    );
  }

  async ban(dto: banUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('The user do not found', HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }
}
