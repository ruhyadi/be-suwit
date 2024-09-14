import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Version,
  UseGuards,
  Req,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReadUserDto } from './dto/read-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Version('1')
  @ApiResponse({ status: 201, description: 'User created', type: ReadUserDto })
  @ApiResponse({ status: 409, description: 'Username already exists' })
  async create(@Body() createUserDto: CreateUserDto): Promise<ReadUserDto> {
    const user = await this.usersService.create(createUserDto);

    return {
      id: user.id,
      username: user.username,
    };
  }

  @Get('self')
  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('oauth2')
  @ApiResponse({
    status: 200,
    description: 'User details',
    type: ReadUserDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getSelf(@Req() req): Promise<ReadUserDto> {
    const user = req.user;

    return {
      id: user.userId,
      username: user.username,
    };
  }

  @Patch('self')
  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('oauth2')
  @ApiResponse({
    status: 200,
    description: 'User updated',
    type: ReadUserDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('oauth2')
  @HttpCode(204)
  @ApiResponse({ status: 204, description: 'User deleted' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteSelf(@Req() req): Promise<void> {
    await this.usersService.remove(req.user.userId);
  }
}
