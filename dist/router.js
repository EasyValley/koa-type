"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const home_1 = require("./controller/home");
const index_1 = require("./dao/index");
const p = index_1.default();
const router = new Router();
router.get('/home', home_1.default(p));
exports.default = router;
//# sourceMappingURL=router.js.map