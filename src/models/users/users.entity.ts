import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: number;

  @Column()
  @IsNotEmpty()
    role: string;

  @Column({ name: 'email', unique: true })
  @IsEmail()
  @IsNotEmpty()
    email: string;

  @Column()
  @IsNotEmpty()
    password: string;

  @CreateDateColumn()
    created_at: Date;

  @UpdateDateColumn()
    updated_at: Date;
}
