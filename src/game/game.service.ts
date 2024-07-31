import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}

  async getGames(): Promise<Game[]> {
    return await this.gamesRepository.find();
  }

  async getGame(id: number): Promise<Game[]> {
    return await this.gamesRepository.find({
      select: ['name'],
      where: [{ id: id }],
    });
  }

  saveGame(game: Game): Promise<Game> {
    return this.gamesRepository.save(game);
  }

  deleteGame(game: Game): void {
    this.gamesRepository.delete(game);
  }
}
