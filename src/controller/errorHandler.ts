import { Context } from 'koa';
import * as moment from 'moment';

export async function errorHandler(ctx: Context, next: () => Promise<any>) {
    try {
        await next();
    } catch (e) {

        let time = moment().format('YYYY-MM-DD HH:mm:ss');
        ctx.logger.error(time, e);
        ctx.body = {
            code: 500,
            message: e.message
        };
    }
}