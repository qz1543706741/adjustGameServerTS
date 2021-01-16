import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('schoo_major')
export class userAdjustInfo {
    @PrimaryColumn({ type: 'int' })
    college_yjfx_id!: number;
    @Column({
        type: 'varchar',
        default: ''
    })
    school_code!: string;
}
