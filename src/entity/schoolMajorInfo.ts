import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Max, IsNotEmpty } from 'class-validator';
@Entity({ name: 'school_major' })
export class schoolMajorInfo {
  @PrimaryGeneratedColumn({ name: 'college_yjfx_id' })
  @IsNotEmpty({ message: '【collegeYjfxId】不能为空' })
  @Max(11, { message: '【collegeYjfxId】长度不能超过11' })
  collegeYjfxId!: number;
  /**
   * schoolCode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'school_code' })
  @IsNotEmpty({ message: '【schoolCode】不能为空' })
  @Max(255, { message: '【schoolCode】长度不能超过255' })
  schoolCode!: string;
  /**
   * schoolName
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'school_name' })
  @IsNotEmpty({ message: '【schoolName】不能为空' })
  @Max(255, { message: '【schoolName】长度不能超过255' })
  schoolName!: string;
  /**
   * majorCode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'major_code' })
  @IsNotEmpty({ message: '【majorCode】不能为空' })
  @Max(255, { message: '【majorCode】长度不能超过255' })
  majorCode!: string;
  /**
   * majorName
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'major_name' })
  @IsNotEmpty({ message: '【majorName】不能为空' })
  @Max(255, { message: '【majorName】长度不能超过255' })
  majorName!: string;
  /**
   * collegeCode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'college_code' })
  @IsNotEmpty({ message: '【collegeCode】不能为空' })
  @Max(255, { message: '【collegeCode】长度不能超过255' })
  collegeCode!: string;
  /**
   * collegeName
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'college_name' })
  @IsNotEmpty({ message: '【collegeName】不能为空' })
  @Max(255, { message: '【collegeName】长度不能超过255' })
  collegeName!: string;
  /**
   * researchDirection
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'research_direction' })
  @IsNotEmpty({ message: '【researchDirection】不能为空' })
  @Max(255, { message: '【researchDirection】长度不能超过255' })
  researchDirection!: string;
  /**
   * studyMode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'study_mode' })
  @IsNotEmpty({ message: '【studyMode】不能为空' })
  @Max(255, { message: '【studyMode】长度不能超过255' })
  studyMode!: string;
  /**
   * categoryCode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'category_code' })
  @IsNotEmpty({ message: '【categoryCode】不能为空' })
  @Max(255, { message: '【categoryCode】长度不能超过255' })
  categoryCode!: string;
  /**
   * provinceCode
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'province_code' })
  @IsNotEmpty({ message: '【provinceCode】不能为空' })
  @Max(255, { message: '【provinceCode】长度不能超过255' })
  provinceCode!: string;
  /**
   * provinceName
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'province_name' })
  @IsNotEmpty({ message: '【provinceName】不能为空' })
  @Max(255, { message: '【provinceName】长度不能超过255' })
  provinceName!: string;
  /**
   * categoryName
   *
   * @type { string }
   * @memberof SchooMajor
   */
  @Column({ name: 'category_name' })
  @IsNotEmpty({ message: '【categoryName】不能为空' })
  @Max(255, { message: '【categoryName】长度不能超过255' })
  categoryName!: string;
}
