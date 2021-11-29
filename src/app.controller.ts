import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Render('login')
  login() {
    return { message: 'Hello World!' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Render('home')
  homepage(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}
