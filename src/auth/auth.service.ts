import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // * Generate the password hash
    const hash = await argon.hash(dto.password);

    // * Save the new user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        password: false,
        createdAt: true,
        updatedAt: true,
      },
    });
    // * Return the saved user
    return user;
  }

  signin() {
    return { message: 'I am sign in' };
  }
}
