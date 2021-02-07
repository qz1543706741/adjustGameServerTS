import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({
  name: 'subjuct_list'
})
export class subjuctList {
  @Column({ name: 'index' })
  index!: number;

  @Column({ name: 'catagory_code' })
  catagoryCode!: string;

  @Column({ name: 'catagory_name' })
  catagoryName!: string;

  @Column({ name: 'first_major_code' })
  firstMajorCode!: string;

  @Column({ name: 'first_major_name' })
  firstMajorName!: string;

  @PrimaryColumn({ name: 'second_major_code' })
  secondMajorCode!: string;

  @Column({ name: 'second_major_name' })
  secondMajorName!: string;
}
