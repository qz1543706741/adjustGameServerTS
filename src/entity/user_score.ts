import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class user_score {
    @PrimaryColumn({ type: 'varchar' })
    openid!: string;

    @Column()
    score?: number;
}
