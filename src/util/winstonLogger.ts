import * as winston from 'winston';
import * as path from 'path';
import { Context } from 'koa';


function winstonLogger() {
    return async (ctx: Context, next: () => Promise<any>) => {
        if (!ctx.logger) {
            ctx.logger = new (winston.Logger)({
                transports: [
                    new (winston.transports.Console)(),
                    new (winston.transports.File)({ filename: path.join(__dirname, '../../logs/info.log') })
                ]
            });
        }
        await next();
    }
}

export default winstonLogger;