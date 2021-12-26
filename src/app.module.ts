import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/users/users.entity';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './models/dashboard/dashboard.module';
import { MedicineModule } from './models/medicine/medicine.module';
import { Medicine } from './models/medicine/medicine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'satriachandrayw',
      password: 'P@ssw0rd123',
      database: 'postgres',
      entities: [User, Medicine],
      synchronize: true,
    }),
    UsersModule,
    MedicineModule,
    AuthModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
