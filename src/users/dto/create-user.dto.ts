import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'JohnDoe', description: 'The username of the User' })
  @IsString()
  @MinLength(5, { message: 'Username must be at least 5 characters long' })
  username: string;

  @ApiProperty({ example: 'password', description: 'The password of the User' })
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  password: string;
}
