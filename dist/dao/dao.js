"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
/**
 * 获取连接数据库的promise对象
 */
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        return typeorm_1.createConnection({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "root",
            "database": "koatype",
            "synchronize": true,
            "logging": false,
            "entities": [User_1.User]
        });
    });
}
exports.default = getConnection;
//# sourceMappingURL=dao.js.map