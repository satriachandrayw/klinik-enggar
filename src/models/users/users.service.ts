import { HttpException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = User.create(createUserDto);
    await user.save();

    delete user.password;
    return user;
  }

  async findOne(id: string): Promise<User | undefined> {
    const user = await User.findOne(id);

    if (!user){
      throw new NotFoundException('User not found');
    }

    delete user.password;
    return user;
  }

  async findByEmail(userEmail: string): Promise<User | undefined> {
    const user = await User.findOne({
      where: { email: userEmail },
    });

    if (!user){
      throw new NotFoundException('User not found');
    }

    return user;
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  deleteByEmail(userEmail: string): Promise<DeleteResult> {
    return this.usersRepository.delete({ email: userEmail });
  }
}
