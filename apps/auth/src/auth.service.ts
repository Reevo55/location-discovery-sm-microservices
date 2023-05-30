import { Injectable } from '@nestjs/common';
import { GoogleProfile } from './types/types';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  googleRegister(request) {
    const googleUser: GoogleProfile = request.user;

    if (!googleUser) {
      throw new Error('Google user not found');
    }

    // find user in db

    // if (user) {
    //   // login
    // } else {
    //   // register and login
    // }
  }
}
