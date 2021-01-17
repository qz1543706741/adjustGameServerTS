import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * school
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class School
 */
@Entity({
    name: 'school'
})
export class School {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof School
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * schoolCode
     *
     * @type { string }
     * @memberof School
     */
    @Column({ name: 'school_code' })
    schoolCode: string;
    /**
     * schoolName
     *
     * @type { string }
     * @memberof School
     */
    @Column({ name: 'school_name' })
    schoolName: string;
    /**
     * provinceId
     *
     * @type { string }
     * @memberof School
     */
    @Column({ name: 'province_id' })
    provinceId: string;
    /**
     * provinceName
     *
     * @type { string }
     * @memberof School
     */
    @Column({ name: 'province_name' })
    provinceName: string;
    /**
     * is_985
     *
     * @type { number }
     * @memberof School
     */
    @Column({ name: 'is_985' })
    is_985: number;
    /**
     * is_211
     *
     * @type { number }
     * @memberof School
     */
    @Column({ name: 'is_211' })
    is_211: number;
    /**
     * 是否是研究生院，57所
     *
     * @type { number }
     * @memberof School
     */
    @Column({ name: 'is_graduate_school' })
    isGraduateSchool: number;
    /**
     * 是否自主划线，34所院校
     *
     * @type { number }
     * @memberof School
     */
    @Column({ name: 'is_self_marking' })
    isSelfMarking: number;
    /**
     * 是否有博士点
     *
     * @type { number }
     * @memberof School
     */
    @Column({ name: 'is_doctor_point' })
    isDoctorPoint: number;
    /**
     * schoolType
     *
     * @type { string }
     * @memberof School
     */
    @Column({ name: 'school_type' })
    schoolType: string;
}