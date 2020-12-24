import 'reflect-metadata';
import { Connection, createConnection, EntityTarget, Entity } from 'typeorm';
import { user_gameInfo } from '../../src/entity/user_gameInfo';

/**
 * 描述
 * 数据库增删改查文件
 * @author qinzhen
 * @date 2020-12-24
 * @returns {any}
 */
export class Curd<Entity> {
    private connection!: Connection;
    constructor() {
        createConnection().then((connection) => {
            this.connection = connection;
        });
    }
    /**
     * 描述:根据依赖字段查询数据库
     * @date 2020-12-24
     * @param {EntityTarget<Entity>} entity:实体
     * @param {Object} options:查询依赖字段
     * @param {boolean} options:查询结果是否唯一，默认不唯一
     * @returns {Object}
     */
    findEntity<Entity>(entity: EntityTarget<Entity>, options?: Object, isResultOnly: boolean = false) {
        if (isResultOnly) return this.connection.manager.findOne<Entity>(entity, options);
        return this.connection.manager.find<Entity>(entity, options);
    }

    addEntity(entity: Entity, options?: Object | string) {
        this.connection.manager.insert(user_gameInfo, {
            openid: options?.toString()
        });
        return this.connection.manager.save(entity);
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
    }
}
