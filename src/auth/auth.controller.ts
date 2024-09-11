import { Controller, HttpCode, Post, UseGuards, Version, Request } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { LocalAuthGuard } from './local-auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Version('1')
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
