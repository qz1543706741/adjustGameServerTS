import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity()
export class user_gameInfo {
    @PrimaryColumn({ type: 'varchar' })
    openid!: string;

    @Column()
    score?: number = 100;

    @Column()
    game_time?: string = +new Date() + '';
}
