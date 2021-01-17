import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/**
 * province
 * @Date 2021/1/27下午8:47:47
 * @author 
 * @export
 * @class Province
 */
@Entity({
    name: 'province'
})
export class Province {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Province
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * provinceId
     *
     * @type { string }
     * @memberof Province
     */
    @Column({ name: 'province_id' })
    provinceId: string;
    /**
     * provinceName
     *
     * @type { string }
     * @memberof Province
     */
    @Column({ name: 'province_name' })
    provinceName: string;
    /**
     * area
     *
     * @type { number }
     * @memberof Province
     */
    @Column({ name: 'area' })
    area: number;
}