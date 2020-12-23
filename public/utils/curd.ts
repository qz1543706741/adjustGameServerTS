import 'reflect-metadata';
import { Connection, createConnection, EntityTarget } from 'typeorm';

export class Curd {
    connection: Connection;
    constructor(connection: Connection) {
        this.connection = connection;
    }
    find<Entity>(options: EntityTarget<Entity>) {
        return this.connection
            .getRepository(options)
            .createQueryBuilder('user_score')
            .where('openid = :openid', { openid: 'o2Yco4wwgkBS3qQ9NtJJZ9Izs3ng' })
            .getOne();
        //return this.connection.manager.find(options);
    }
}
