import * as Router from 'koa-router';
import { Connection } from 'typeorm';
import getConnection from './dao/index';
import home from './controller/home';
import addPhotoAndMetadata from './controller/addPhotoAndMetadata';
import findPhotoById from './controller/findPhotoById';
import addAlbumsAndPhotos from './controller/addAlbumsAndPhotos';
const connectionPromise: Promise<Connection> = getConnection();
const router = new Router();

router.get('/a', async (ctx, next) => {
    let res = ctx.response;
    res.body ={name:'张三',age:39}
});
router.get('/home', home(connectionPromise));
router.post('/photo/add', addPhotoAndMetadata(connectionPromise));
router.get('/photo', findPhotoById(connectionPromise));
router.get('/album/:id', addAlbumsAndPhotos(connectionPromise))


export default router;