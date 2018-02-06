"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const path = require("path");
/**
 * 获取连接数据库的promise对象
 */
function getConnection() {
    return typeorm_1.createConnection({
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
exports.default = getConnection;
//# sourceMappingURL=index.js.map