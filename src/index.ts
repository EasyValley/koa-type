import * as Koa from 'koa';
import router from './router';
import { errorHandler } from './controller/errorHandler';
const app = new Koa();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx, next) => {
    ctx.body = 'next显示';
});

app.listen(3000, () => {
    console.log('我的koa在运行了.');
});

app.on('error', (err) => {
    console.log(err);
    console.log('出错了');
});