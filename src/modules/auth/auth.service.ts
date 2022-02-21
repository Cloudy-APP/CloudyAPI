import { Injectable } from '@nestjs/common'
import * as Requests from './types/requests'

@Injectable()
export class AuthService {
  register(userData: Requests.Register) {
    return `Registered B) ${userData.name}`
  }

  login() {
    return 'Hello WORLD!!!!!'
  }

  logout() {
    return 'Bye!'
  }
}
