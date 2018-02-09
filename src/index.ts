import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as staticServer from 'koa-static';
import * as path from 'path';
import * as config from './config';
import router from './router';
import winstonLogger from './util/winstonLogger';
import { errorHandler } from './controller/errorHandler';
const app = new Koa();

app.keys = ['im a newer secret', 'i like turtle'];
app.use(logger());
app.use(winstonLogger());
app.use(staticServer(path.join(__dirname, './static')));
app.use(errorHandler);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(config.PORT, () => {
    console.log(`koa应用在${config.PORT}端口运行。。这是一个web项目。`);
});

app.on('error', (err) => {
    console.log(err);
    console.log('出错了');
});

export default app;