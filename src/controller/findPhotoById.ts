import { Context } from 'koa';
import { Connection } from 'typeorm';
import { Photo } from '../entity/Photo';
import { PhotoMetadata } from '../entity/PhotoMetadata';
export default (connectionPromise) => {
    return async (ctx: Context, next: () => Promise<any>) => {
        const connection: Connection = await connectionPromise;
        let photoRepository = connection.getRepository(Photo);
        let photos = await photoRepository.createQueryBuilder('photo').innerJoinAndSelect('photo.metadata', 'metadata').getMany();
        ctx.body = photos;
    }
}