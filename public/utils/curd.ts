import 'reflect-metadata';
import { Connection, createConnection, EntityTarget } from 'typeorm';

export class Curd {
    connection!: Connection;
    constructor() {
        createConnection().then((connection) => (this.connection = connection));
    }
    find<Entity>(options: EntityTarget<Entity>) {
        try {
            return this.connection
                .getRepository(options)
                .createQueryBuilder('user_score')
                .where('openid = :openid', { openid: 'o2Yco4wwgkBS3qQ9NtJJZ9Izs3ng' })
                .getOne();
        } catch (e) {
            return e;
        }
    }
    insert<Entity>(options: EntityTarget<Entity>) {
        return this.connection;
    }
    close() {
        if (this.connection) this.connection.close();
    }
}
