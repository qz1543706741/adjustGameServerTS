import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('user_info')
export class userInfo {
  @PrimaryColumn()
  openid!: string;

  @Column()
  gender!: number;

  @Column()
  nick_name!: string;

  @Column()
  language!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column()
  country!: string;

  @Column()
  avatar_url!: string;

  @Column()
  session_key!: string;
}
