import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get()
  findByEmail(@Body('email') email: string): Promise<User[]> {
    return this.userService.findByEmail(email);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.deleteById(id);
  }

  @Delete()
  deleteByEmail(@Body('email') email: string): Promise<DeleteResult> {
    return this.userService.deleteByEmail(email);
  }
}
