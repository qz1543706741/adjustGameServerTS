import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * subjuct_list
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class SubjuctList
 */
@Entity({
    name: 'subjuct_list'
})
export class SubjuctList {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof SubjuctList
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * index
     *
     * @type { number }
     * @memberof SubjuctList
     */
    @Column({ name: 'index' })
    index: number;
    /**
     * catagoryCode
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'catagory_code' })
    catagoryCode: string;
    /**
     * catagoryName
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'catagory_name' })
    catagoryName: string;
    /**
     * firstMajorCode
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'first_major_code' })
    firstMajorCode: string;
    /**
     * firstMajorName
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'first_major_name' })
    firstMajorName: string;
    /**
     * secondMajorCode
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'second_major_code' })
    secondMajorCode: string;
    /**
     * secondMajorName
     *
     * @type { string }
     * @memberof SubjuctList
     */
    @Column({ name: 'second_major_name' })
    secondMajorName: string;
}