import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import * as Requests from './types/requests'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userData: Requests.Register) {
    return this.authService.register(userData)
  }

  @Post('login')
  login() {
    return this.authService.login()
  }

  @Post('logout')
  logout() {
    return this.authService.logout()
  }
}
