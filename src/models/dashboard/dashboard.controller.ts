import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  getDashboard(@Req() req: Request) {
    return `ini dashboard ${req}`;
  }
}
