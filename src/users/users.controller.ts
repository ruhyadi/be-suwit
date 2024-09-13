import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Version,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('oauth2')
@ApiTags('users')
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
  async getSelf(@Req() req): Promise<ReadUserDto> {
    const user = req.user;

    return {
      id: user.userId,
      username: user.username,
    };
  }

  @Patch('self')
  @Version('1')
  async updateSelf(
    @Req() req,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ReadUserDto> {
    const user = await this.usersService.update(req.user.userId, updateUserDto);

    return {
      id: user.id,
      username: user.username,
    };
  }

  @Delete('self')
  @Version('1')
  async deleteSelf(@Req() req): Promise<void> {
    await this.usersService.remove(req.user.userId);
  }
}
