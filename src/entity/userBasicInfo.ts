import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('user_basic_info')
export class userBasicInfo {
    @PrimaryColumn({ type: 'varchar' })
    openid!: string;

    @Column({
        type: 'varchar'
    })
    nickname?: string;
    @Column({
        type: 'varchar'
    })
    age?: number;
    @Column({
        type: 'int'
    })
    adjust_score?: number;
    @Column({
        type: 'int'
    })
    undergraduate_rank?: number;
    @Column({
        type: 'int'
    })
    adjust_school_code?: number;
    @Column({
        type: 'varchar'
    })
    adjust_school_name?: string;
    @Column({
        type: 'int'
    })
    adjust_major_code?: number;
    @Column({
        type: 'varchar'
    })
    adjust_major_name?: string;
    @Column({
        type: 'int'
    })
    undergraduate_school_code?: number;
    @Column({
        type: 'varchar'
    })
    undergraduate_school_name?: string;
    @Column({
        type: 'int'
    })
    undergraduate_major_code?: number;
    @Column({
        type: 'varchar'
    })
    undergraduate_major_name?: string;
}
