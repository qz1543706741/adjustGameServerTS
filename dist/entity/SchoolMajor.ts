import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * school_major
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class SchoolMajor
 */
@Entity({
    name: 'school_major'
})
export class SchoolMajor {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof SchoolMajor
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * collegeYjfxId
     *
     * @type { number }
     * @memberof SchoolMajor
     */
    @Column({ name: 'college_yjfx_id' })
    collegeYjfxId: number;
    /**
     * schoolCode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'school_code' })
    schoolCode: string;
    /**
     * schoolName
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'school_name' })
    schoolName: string;
    /**
     * majorCode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'major_code' })
    majorCode: string;
    /**
     * majorName
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'major_name' })
    majorName: string;
    /**
     * collegeCode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'college_code' })
    collegeCode: string;
    /**
     * collegeName
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'college_name' })
    collegeName: string;
    /**
     * researchDirection
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'research_direction' })
    researchDirection: string;
    /**
     * studyMode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'study_mode' })
    studyMode: string;
    /**
     * categoryCode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'category_code' })
    categoryCode: string;
    /**
     * provinceCode
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'province_code' })
    provinceCode: string;
    /**
     * provinceName
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'province_name' })
    provinceName: string;
    /**
     * categoryName
     *
     * @type { string }
     * @memberof SchoolMajor
     */
    @Column({ name: 'category_name' })
    categoryName: string;
}