import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Version('1')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto);

    return {
      id: user.id,
      username: user.username,
    };

  }

  @Get('self')
  @Version('1')
  async getSelf(): Promise<any> {
    return "get"
  }

  @Patch('self')
  @Version('1')
  async updateSelf(): Promise<any> {
    return "update"
  }

  @Delete('self')
  @Version('1')
  async deleteSelf(): Promise<any> {
    return "delete"
  }

}
