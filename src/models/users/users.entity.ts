import { compare, hash } from 'bcrypt';
import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class User extends BaseEntity{
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

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }
}
