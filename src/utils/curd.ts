import 'reflect-metadata';
<<<<<<< HEAD:public/utils/curd.ts
import { Connection, createConnection, EntityTarget } from 'typeorm';
=======
import { Connection, createConnection, EntityTarget, Entity } from 'typeorm';
>>>>>>> 71ff0dd (dev:代码逻辑优化):src/utils/curd.ts

export class Curd {
    connection: Connection;
    constructor(connection: Connection) {
        this.connection = connection;
    }
<<<<<<< HEAD:public/utils/curd.ts
    find<Entity>(options: EntityTarget<Entity>) {
        return this.connection
            .getRepository(options)
            .createQueryBuilder('user_score')
            .where('openid = :openid', { openid: 'o2Yco4wwgkBS3qQ9NtJJZ9Izs3ng' })
            .getOne();
        //return this.connection.manager.find(options);
=======
    /**
     * 描述:根据依赖字段查询数据库
     * @date 2020-12-24
     * @param {EntityTarget<Entity>} entity:实体
     * @param {Object} options:查询依赖字段
     * @param {boolean} options:查询结果是否唯一，默认不唯一
     * @returns {Object}
     */
    findEntity<Entity>(entity: EntityTarget<Entity>, options?: Object, isResultOnly: boolean = false) {
        if (isResultOnly) return this.connection.manager.findOne<Entity>(entity, options).catch((error) => console.log(error));
        return this.connection.manager.find<Entity>(entity, options);
    }

    addEntity(entity: EntityTarget<Entity>, options?: Object | string) {
        // try {
        //     return this.connection.manager.insert(
        //         user_gameInfo,
        //         {
        //             openid: <string>options
        //         } || <Object>options
        //     );
        // } catch (error) {
        //     return error;
        // }
    }

    /**
     * 描述：关闭数据库
     * @date 2020-12-24
     * @returns {}
     */
    close() {
        if (this.connection) {
            if (this.connection.manager) this.connection.manager.release();
            this.connection.close();
        }
>>>>>>> 71ff0dd (dev:代码逻辑优化):src/utils/curd.ts
    }
}
