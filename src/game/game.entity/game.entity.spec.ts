import { Game } from './game.entity';

describe('GameEntity', () => {
  it('should be defined', () => {
    expect(new Game()).toBeDefined();
  });
});
