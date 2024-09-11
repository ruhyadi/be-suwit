import { ApiProperty } from '@nestjs/swagger';

export class ReadUserDto {
  @ApiProperty({ example: 1, description: 'The id of the User' })
  id: number;

  @ApiProperty({ example: 'JohnDoe', description: 'The username of the User' })
  username: string;
}
