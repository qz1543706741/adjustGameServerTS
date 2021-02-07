import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Index } from 'typeorm';
@Entity({
  name: 'user_subject_score'
})
@Index(['openid', 'group_index'], { unique: true })
export class userSubjectScore {
  // @PrimaryGeneratedColumn()
  // id?: number;

  @PrimaryColumn({ type: 'varchar' })
  openid!: string;

  @PrimaryColumn({ type: 'varchar' })
  group_index!: string;

  @Column({ type: 'varchar' })
  foreignCourseName?: string;

  @Column({ type: 'varchar' })
  foreignCourseScore?: string;

  @Column({ type: 'varchar' })
  politicsCourseName?: string;

  @Column({ type: 'varchar' })
  politicsCourseScore?: string;

  @Column({ type: 'varchar' })
  majorCourse_1_Name?: string;

  @Column({ type: 'varchar' })
  majorCourse_1_Score?: string;

  @Column({ type: 'varchar' })
  majorCourse_2_Name?: string;

  @Column({ type: 'varchar' })
  majorCourse_2_Score?: string;
}
