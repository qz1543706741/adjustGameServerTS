import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * user_adjust_info
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class UserAdjustInfo
 */
@Entity({
    name: 'user_adjust_info'
})
export class UserAdjustInfo {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof UserAdjustInfo
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * openid
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'openid' })
    openid: string;
    /**
     * adjustSchoolCode_01
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_code_01' })
    adjustSchoolCode_01: string;
    /**
     * adjustSchoolName_01
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_name_01' })
    adjustSchoolName_01: string;
    /**
     * adjustSchoolCode_02
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_code_02' })
    adjustSchoolCode_02: string;
    /**
     * adjustSchoolName_02
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_name_02' })
    adjustSchoolName_02: string;
    /**
     * adjustSchoolCode_03
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_code_03' })
    adjustSchoolCode_03: string;
    /**
     * adjustSchoolName_03
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_name_03' })
    adjustSchoolName_03: string;
    /**
     * adjustSchoolCode_04
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_code_04' })
    adjustSchoolCode_04: string;
    /**
     * adjustSchoolName_04
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_school_name_04' })
    adjustSchoolName_04: string;
    /**
     * adjustMajorCode_01
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_code_01' })
    adjustMajorCode_01: string;
    /**
     * adjustMajorName_01
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_name_01' })
    adjustMajorName_01: string;
    /**
     * adjustMajorCode_02
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_code_02' })
    adjustMajorCode_02: string;
    /**
     * adjustMajorName_02
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_name_02' })
    adjustMajorName_02: string;
    /**
     * adjustMajorCode_03
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_code_03' })
    adjustMajorCode_03: string;
    /**
     * adjustMajorName_03
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_name_03' })
    adjustMajorName_03: string;
    /**
     * adjustMajorCode_04
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_code_04' })
    adjustMajorCode_04: string;
    /**
     * adjustMajorName_04
     *
     * @type { string }
     * @memberof UserAdjustInfo
     */
    @Column({ name: 'adjust_major_name_04' })
    adjustMajorName_04: string;
}