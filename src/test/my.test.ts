import app from '../index';
process.env.NODE_ENV = 'test';
const request = require('supertest');
let server = app.listen();

describe('请求/a', () => {
    it('需要得到ss内容', (done) => {
        request(server)
            .get('/a')
            .expect(200)
            .end(done);
    })
});

describe('请求/home', () => {
    it('访问/home', (done) => {
        request(server)
            .get('/home')
            .expect(200)
            .end(done);
    })
});

describe('请求/photo/add', () => {
    it('添加照片', (done) => {
        request(server)
            .post('/photo/add')
            .send({
                "metadata": {
                    "height": 640,
                    "width": 480,
                    "compressed": true,
                    "comment": "我测试添加大哈哈哈",
                    "orientation": "portait",
                    "photo": {
                        "name": "测试mocha大乔",
                        "description": "I am near polar bears",
                        "filename": "photo-with-bears.jpg",
                        "isPublished": true,
                        "views": 100
                    }
                }
            })
            .expect(200)
            .end(done);
    })
});
