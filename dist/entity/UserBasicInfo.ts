import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * user_basic_info
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class UserBasicInfo
 */
@Entity({
    name: 'user_basic_info'
})
export class UserBasicInfo {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof UserBasicInfo
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * openid
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'openid' })
    openid: string;
    /**
     * nickname
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'nickname' })
    nickname: string;
    /**
     * age
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'age' })
    age: string;
    /**
     * adjustScore
     *
     * @type { number }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'adjust_score' })
    adjustScore: number;
    /**
     * undergraduateRank
     *
     * @type { number }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'undergraduate_rank' })
    undergraduateRank: number;
    /**
     * adjustSchoolName
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'adjust_school_name' })
    adjustSchoolName: string;
    /**
     * adjustMajorName
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'adjust_major_name' })
    adjustMajorName: string;
    /**
     * undergraduateSchoolName
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'undergraduate_school_name' })
    undergraduateSchoolName: string;
    /**
     * undergraduateMajorName
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'undergraduate_major_name' })
    undergraduateMajorName: string;
    /**
     * adjustSchoolCode
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'adjust_school_code' })
    adjustSchoolCode: string;
    /**
     * adjustMajorCode
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'adjust_major_code' })
    adjustMajorCode: string;
    /**
     * undergraduateSchoolCode
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'undergraduate_school_code' })
    undergraduateSchoolCode: string;
    /**
     * undergraduateMajorCode
     *
     * @type { string }
     * @memberof UserBasicInfo
     */
    @Column({ name: 'undergraduate_major_code' })
    undergraduateMajorCode: string;
}