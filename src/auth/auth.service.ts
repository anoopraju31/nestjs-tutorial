import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      message: 'I am signin',
      status: 200,
    };
  }

  signup() {
    return {
      message: 'I am signup',
      status: 200,
    };
  }
}
