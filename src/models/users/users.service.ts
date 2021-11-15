import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.email = createUserDto.email;
    user.role = createUserDto.role;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findByEmail(userEmail: string): Promise<User[]> {
    return this.usersRepository.find({
      where: { email: userEmail },
    });
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  deleteByEmail(userEmail: string): Promise<DeleteResult> {
    return this.usersRepository.delete({ email: userEmail });
  }
}
