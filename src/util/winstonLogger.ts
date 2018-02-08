import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';
import { Context } from 'koa';


function winstonLogger() {
    return async (ctx: Context, next: () => Promise<any>) => {
        let filename = path.join(__dirname, '../../../logs/info.log');

        if (!ctx.logger) {
            ctx.logger = new (winston.Logger)({
                transports: [
                    new (winston.transports.Console)(),
                    new (winston.transports.File)({ filename })
                ]
            });
        }
        await next();
    }
}

export default winstonLogger;
