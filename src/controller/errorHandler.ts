import { Context } from 'koa';
import * as moment from 'moment';

export async function errorHandler(ctx: Context, next: () => Promise<any>) {
    try {
        await next();
    } catch (e) {

        let time = moment().format('YYYY-MM-DD HH:mm:ss');
        ctx.logger.error(time, e);
        ctx.status = e.status || 500;
        ctx.body = {
            message: e.message
        };
    }
}