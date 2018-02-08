import { Context } from 'koa';

export async function errorHandler(ctx: Context, next: () => Promise<any>) {
    try {
        await next();
    } catch (e) {
        ctx.logger.error(e);
        ctx.body = {
            code: 500,
            message: e.message
        };
    }
}