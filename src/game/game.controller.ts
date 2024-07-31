import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { GameService } from './game.service';
import { Game } from './game.entity/game.entity';

@Controller('/game')
export class GameController {
  constructor(private service: GameService) {}

  @Get()
  getAll() {
    return this.service.getGames();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getGame(params.id);
  }

  @Post()
  create(@Body() game: Game) {
    return this.service.saveGame(game);
  }

  @Put()
  update(@Body() game: Game) {
    return this.service.saveGame(game);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteGame(params.id);
    return;
  }
}
