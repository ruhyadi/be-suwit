import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'JohnDoe', description: 'The username of the User' })
  username: string;

  @ApiProperty({ example: 'password', description: 'The password of the User' })
  password: string;
}
