import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('user_game_info')
export class userGameInfo {
  @PrimaryColumn({ type: 'varchar' })
  openid!: string;

  @Column({
    type: 'int',
    default: 100
  })
  score?: number;

  @Column({
    type: 'boolean',
    default: false
  })
  level_single?: boolean;

  @Column({
    type: 'boolean',
    default: false
  })
  level_computer?: boolean;

  @Column({
    type: 'boolean',
    default: false
  })
  level_player?: boolean;

  @Column({
    type: 'varchar',
    default: +new Date() + ''
  })
  game_time?: string;
}
