import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * exemption_exam
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class ExemptionExam
 */
@Entity({
    name: 'exemption_exam'
})
export class ExemptionExam {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof ExemptionExam
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * exemptionExamId
     *
     * @type { number }
     * @memberof ExemptionExam
     */
    @Column({ name: 'exemption_exam_id' })
    exemptionExamId: number;
    /**
     * studentName
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'student_name' })
    studentName: string;
    /**
     * originalMajor
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'original_major' })
    originalMajor: string;
    /**
     * originalSchool
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'original_school' })
    originalSchool: string;
    /**
     * targetMajor
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'target_major' })
    targetMajor: string;
    /**
     * targetMajorCode
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'target_major_code' })
    targetMajorCode: string;
    /**
     * targetSchool
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'target_school' })
    targetSchool: string;
    /**
     * targetCollege
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'target_college' })
    targetCollege: string;
    /**
     * score
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'score' })
    score: string;
    /**
     * studyType
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'study_type' })
    studyType: string;
    /**
     * year
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'year' })
    year: string;
    /**
     * remarks
     *
     * @type { string }
     * @memberof ExemptionExam
     */
    @Column({ name: 'remarks' })
    remarks: string;
}