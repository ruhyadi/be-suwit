import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'JohnDoe', description: 'The username of the User' })
  username: string;

  @ApiProperty({ example: 'password', description: 'The password of the User' })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({ example: 'eyJhbGcixx', description: 'The JWT access token' })
  access_token: string;
}
