import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * major_course
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class MajorCourse
 */
@Entity({
    name: 'major_course'
})
export class MajorCourse {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof MajorCourse
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * majorCourseId
     *
     * @type { number }
     * @memberof MajorCourse
     */
    @Column({ name: 'major_course_id' })
    majorCourseId: number;
    /**
     * schoolCode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'school_code' })
    schoolCode: string;
    /**
     * schoolName
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'school_name' })
    schoolName: string;
    /**
     * majorCode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'major_code' })
    majorCode: string;
    /**
     * majorName
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'major_name' })
    majorName: string;
    /**
     * collegeCode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'college_code' })
    collegeCode: string;
    /**
     * collegeName
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'college_name' })
    collegeName: string;
    /**
     * researchDirection
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'research_direction' })
    researchDirection: string;
    /**
     * studyMode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'study_mode' })
    studyMode: string;
    /**
     * examMode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'exam_mode' })
    examMode: string;
    /**
     * webUrl
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'web_url' })
    webUrl: string;
    /**
     * categoryCode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'category_code' })
    categoryCode: string;
    /**
     * provinceCode
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'province_code' })
    provinceCode: string;
    /**
     * provinceName
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'province_name' })
    provinceName: string;
    /**
     * politicsCourse
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'politics_course' })
    politicsCourse: string;
    /**
     * foreignCourse
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'foreign_course' })
    foreignCourse: string;
    /**
     * majorCourse_1
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'major_course_1' })
    majorCourse_1: string;
    /**
     * majorCourse_2
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'major_course_2' })
    majorCourse_2: string;
    /**
     * remarks
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'remarks' })
    remarks: string;
    /**
     * planNum
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'plan_num' })
    planNum: string;
    /**
     * categoryName
     *
     * @type { string }
     * @memberof MajorCourse
     */
    @Column({ name: 'category_name' })
    categoryName: string;
}