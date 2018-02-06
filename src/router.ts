import * as Router from 'koa-router';
import { Connection } from 'typeorm';
import home from './controller/home';
import getConnection from './dao/index';
const p: Promise<Connection> = getConnection();

const router = new Router();

router.get('/home', home(p));


export default router;