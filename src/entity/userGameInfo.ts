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
        type: 'varchar',
        default: +new Date() + ''
    })
    game_time?: string;
}
