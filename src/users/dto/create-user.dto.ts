import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'JohnDoe', description: 'The username of the User' })
  username: string;
}
