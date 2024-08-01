import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { userService } from './user.service';
import { User } from './user.entity/user.entity';

@Controller('/user')
export class UserController {
  constructor(private service: userService) {}

  @Get()
  getAll() {
    return this.service.getusers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getuser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.saveuser(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.service.modifyuser(+id, user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteuser(params.id);
    return;
  }
}
