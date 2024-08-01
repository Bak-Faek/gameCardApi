import { User } from './user.entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [userService],
  controllers: [UserController],
})
export class UsersModule {}
