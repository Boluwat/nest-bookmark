/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'Hello world Sign Up' };
  }

  signIn() {
    return { msg: 'Hello world Sign In' };
  }
}
