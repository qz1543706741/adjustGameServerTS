import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'major_course'
})
export class majorCourse {
  @PrimaryColumn({ name: 'major_course_id' })
  majorCourseId!: string;

  @Column({ name: 'school_code' })
  schoolCode?: string;

  @Column({ name: 'school_name' })
  schoolName?: string;

  @Column({ name: 'major_code' })
  majorCode?: string;

  @Column({ name: 'major_name' })
  majorName?: string;

  @Column({ name: 'college_code' })
  collegeCode?: string;

  @Column({ name: 'college_name' })
  collegeName?: string;

  @Column({ name: 'research_direction' })
  researchDirection?: string;

  @Column({ name: 'study_mode' })
  studyMode?: string;

  @Column({ name: 'exam_mode' })
  examMode?: string;

  @Column({ name: 'web_url' })
  webUrl?: string;

  @Column({ name: 'category_code' })
  categoryCode?: string;

  @Column({ name: 'province_code' })
  provinceCode?: string;

  @Column({ name: 'province_name' })
  provinceName?: string;

  @Column({ name: 'politics_course' })
  politicsCourse?: string;

  @Column({ name: 'foreign_course' })
  foreignCourse?: string;

  @Column({ name: 'major_course_1' })
  majorCourse_1?: string;

  @Column({ name: 'major_course_2' })
  majorCourse_2?: string;

  @Column({ name: 'remarks' })
  remarks?: string;

  @Column({ name: 'plan_num' })
  planNum?: string;

  @Column({ name: 'category_name' })
  categoryName?: string;
}
