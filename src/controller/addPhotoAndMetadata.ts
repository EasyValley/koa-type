import { Context } from 'koa';
import { Connection } from 'typeorm';
import { Photo } from '../entity/Photo';
import { PhotoMetadata } from '../entity/PhotoMetadata';

export default (connectionPromise: Promise<Connection>) => {
    return async (ctx: Context, next: () => Promise<any>) => {
        let req = ctx.request;
        let res = ctx.response;

        let data = req.body;

        let connection: Connection = await connectionPromise;
        let photoRepository = connection.getRepository(Photo);
        let metadataRepository = connection.getRepository(PhotoMetadata);
        try {
            await photoRepository.save(data.metadata.photo);
            await metadataRepository.save(data.metadata);
            res.body = {
                message: 'success'
            };
        } catch (error) {
            ctx.throw(401, 'access_denied', { user: '3' });
        }

    }
}