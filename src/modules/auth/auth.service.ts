import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  register() {
    return 'Registered B)'
  }

  login() {
    return 'Hello WORLD!!!!!'
  }

  logout() {
    return 'Bye!'
  }
}
