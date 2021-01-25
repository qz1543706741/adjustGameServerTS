import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('user_adjust_info')
export class userAdjustInfo {
    @PrimaryColumn({ type: 'varchar' })
    openid!: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_code_01?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_name_01?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_code_02?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_name_02?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_code_03?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_name_03?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_code_04?: string;
    @Column({
        type: 'varchar',
        default: ''
    })
    adjust_school_name_04?: string;
}
