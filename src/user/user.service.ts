import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getusers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getuser(id: number): Promise<User[]> {
    return await this.userRepository.find({
      select: ['firstName', 'lastName', 'isActive'],
      where: [{ id: id }],
    });
  }

  async modifyuser(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: [{ id: id }] });
  }

  saveuser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  deleteuser(User: User): void {
    this.userRepository.delete(User);
  }
}
