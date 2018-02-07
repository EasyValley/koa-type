import { Context, } from 'koa';
import { Connection, EntityManager } from 'typeorm';
import { User } from '../entity/User';

export default (p: Promise<Connection>) => {
    return async function home(ctx: Context, next: () => Promise<any>) {
        let connection: Connection = await p;
        const userRepository = await connection.getRepository(User);
        let users = await userRepository.find();
        ctx.body = users;
    }
}
