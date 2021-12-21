import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth/auth.service';
import { AuthLoginDto } from './auth/dto/auth.dto';

@Injectable()


export class AppService {
  constructor(private readonly authService: AuthService) {}

  getHello(): string {
    return 'Hello World!';
  }

  login(req: AuthLoginDto): Promise<any> {
    return this.authService.login(req);
  }
}
