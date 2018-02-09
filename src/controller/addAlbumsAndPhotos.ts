
import { Connection } from 'typeorm';
import { Context } from 'koa';
import { Album } from '../entity/Album';
import { Photo } from '../entity/Photo';


export default (connectionPromise: Promise<Connection>) => {
    return async (ctx: Context, next: () => Promise<any>) => {
        // let id = ctx.params.id;
        // ctx.cookies.set('nameHello', 'tobilll');
        // let connection: Connection = await connectionPromise;
        // let photoRepository = connection.getRepository(Photo);
        // let photos = await photoRepository.createQueryBuilder('photo')
        //     .leftJoinAndSelect("photo.albums", "albums")
        //     .orderBy('photo.id', 'ASC')
        //     .getMany();
        ctx.body = ctx.path;
        // let album1 = new Album();
        // album1.name = '风景';
        // let album2 = new Album();
        // album2.name = "动物";

        // // 创建两个photos
        // let photo1 = new Photo();
        // photo1.name = "Me and Bears张三";
        // photo1.description = "I am near polar bears";
        // photo1.filename = "photo-with-bears.jpg";
        // photo1.views = 0;
        // photo1.isPublished = false;
        // photo1.albums = [album1];



        // let photo2 = new Photo();
        // photo2.name = "Me and Bears";
        // photo2.description = "I am near polar bears";
        // photo2.filename = "photo-with-bears.jpg";
        // photo2.views = 0;
        // photo2.isPublished = true;
        // photo2.albums = [album2];
        // await photoRepository.save(photo1);
        // await photoRepository.save(photo2);

    }
}