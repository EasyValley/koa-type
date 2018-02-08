import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as config from './config';
import router from './router';
import { errorHandler } from './controller/errorHandler';
const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.PORT, () => {
    console.log(`koa应用在${config.PORT}端口运行。。。`);
});

app.on('error', (err) => {
    console.log(err);
    console.log('出错了');
});