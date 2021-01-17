import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * user_game_info
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class UserGameInfo
 */
@Entity({
    name: 'user_game_info'
})
export class UserGameInfo {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof UserGameInfo
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * openid
     *
     * @type { string }
     * @memberof UserGameInfo
     */
    @Column({ name: 'openid' })
    openid: string;
    /**
     * score
     *
     * @type { number }
     * @memberof UserGameInfo
     */
    @Column({ name: 'score' })
    score: number;
    /**
     * gameTime
     *
     * @type { string }
     * @memberof UserGameInfo
     */
    @Column({ name: 'game_time' })
    gameTime: string;
    /**
     * levelSingle
     *
     * @type { string }
     * @memberof UserGameInfo
     */
    @Column({ name: 'level_single' })
    levelSingle: string;
    /**
     * levelComputer
     *
     * @type { string }
     * @memberof UserGameInfo
     */
    @Column({ name: 'level_computer' })
    levelComputer: string;
    /**
     * levelPlayer
     *
     * @type { string }
     * @memberof UserGameInfo
     */
    @Column({ name: 'level_player' })
    levelPlayer: string;
}