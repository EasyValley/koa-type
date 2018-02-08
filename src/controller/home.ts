import { Context } from 'koa';
import { Connection } from 'typeorm';
import { User } from '../entity/User';

export default (connectionPromise: Promise<Connection>) => {
    return async function home(ctx: Context, next: () => Promise<any>) {

        let connection: Connection = await connectionPromise;
        const userRepository = await connection.getRepository(User);
        let users = await userRepository.find();
        ctx.body = users;
    }
}



