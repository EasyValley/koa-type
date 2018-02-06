import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import * as path from 'path';
/**
 * 获取连接数据库的promise对象
 */
function getConnection(): Promise<Connection> {
    return createConnection({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "koatype",
        "synchronize": true,
        "logging": false,
        "entities": [
            path.join(__dirname, '../entity/**/**')
        ]
    });
}

export default getConnection;
