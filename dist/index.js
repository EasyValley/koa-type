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
const Koa = require("koa");
const router_1 = require("./router");
const errorHandler_1 = require("./controller/errorHandler");
const app = new Koa();
app.use(errorHandler_1.errorHandler);
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = 'next显示';
}));
app.listen(3000, () => {
    console.log('我的koa在运行了.');
});
app.on('error', (err) => {
    console.log(err);
    console.log('出错了');
});
//# sourceMappingURL=index.js.map