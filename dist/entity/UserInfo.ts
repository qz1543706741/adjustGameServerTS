import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * user_info
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class UserInfo
 */
@Entity({
    name: 'user_info'
})
export class UserInfo {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof UserInfo
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * nickName
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'nick_name' })
    nickName: string;
    /**
     * city
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'city' })
    city: string;
    /**
     * province
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'province' })
    province: string;
    /**
     * country
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'country' })
    country: string;
    /**
     * avatarUrl
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'avatar_url' })
    avatarUrl: string;
    /**
     * sessionKey
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'session_key' })
    sessionKey: string;
    /**
     * openid
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'openid' })
    openid: string;
    /**
     * gender
     *
     * @type { number }
     * @memberof UserInfo
     */
    @Column({ name: 'gender' })
    gender: number;
    /**
     * language
     *
     * @type { string }
     * @memberof UserInfo
     */
    @Column({ name: 'language' })
    language: string;
}