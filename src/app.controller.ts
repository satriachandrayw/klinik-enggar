import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('login')
  @Render('login')
  login() {
    return { message: 'Hello World!' };
  }

  @Post('login')
  async homepage(@Req() req: Request, @Res() res: Response):Promise<any>{
    const payload = { email: req.body.email, password: req.body.password }; 

    const accessToken = await this.appService.login(payload);

    res.cookie('id-token', accessToken, { httpOnly: true });

    return res.redirect('/dashboard');
  }
}
