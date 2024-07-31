import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @OneToMany(() => Player, (player) => player.game)
  // players: Player[];

  // @OneToMany(() => Card, (card) => card.game)
  // cards: Card[];
}
