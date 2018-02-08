import * as Router from 'koa-router';
import { Connection } from 'typeorm';
import getConnection from './dao/index';
import home from './controller/home';
import addPhotoAndMetadata from './controller/addPhotoAndMetadata';
import findPhotoById from './controller/findPhotoById';

const connectionPromise: Promise<Connection> = getConnection();
const router = new Router();

router.get('/home', home(connectionPromise));
router.post('/photo/add', addPhotoAndMetadata(connectionPromise));
router.get('/photo', findPhotoById(connectionPromise));


export default router;