import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class user_info {
    @PrimaryColumn()
    openid!: string;

    @Column()
    nick_name!: string;

    @Column()
    language!: number;

    @Column()
    city!: string;

    @Column()
    province!: string;

    @Column()
    country!: string;

    @Column()
    avatar_url!: string;

    @Column()
    session_key!: string;
}
