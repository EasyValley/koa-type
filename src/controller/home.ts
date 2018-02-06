import { Context, } from 'koa';
import { Connection, EntityManager } from 'typeorm';
import { User } from '../entity/User';

export default (p: Promise<any>) => {
    return async function home(ctx: Context, next: () => Promise<any>) {
        const connection = await p;
        const userRepository = await connection.getRepository(User);
        let users = await userRepository.find();
        ctx.body = users;
    }
}
