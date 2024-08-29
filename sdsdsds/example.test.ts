import { expect } from 'chai';

describe('Sample Test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

// import { use, should, expect } from 'chai';
// import chaiHttp from 'chai-http';
// import {app} from '../app';
// import randomstring from 'randomstring';
// import { Express } from 'express';
// import { describe } from 'node:test';

// const chai = use(chaiHttp);
// should();

// const chaiRequest = (url:string, callback:Function) => {
//     return chai.request.execute(app)
//         .get(url)
//         .end((err:Error | null, res:ChaiHttp.Response) => callback(err, res));
// };

// describe("GET /user", () => {
//     it("Should have status 200", (done:Mocha.Done) => {
//         chaiRequest("/user", (err:Error | null, res:ChaiHttp.Response) => {
//             expect(res).to.have.status(200);
//             done();
//         })
//     })
// })

// // import { use, should, expect } from 'chai';
// // import chaiHttp from 'chai-http';
// // import {app} from '../app';
// // import randomstring from 'randomstring';
// // import { describe } from 'node:test';

// // const chai = use(chaiHttp);
// // should();

// // const chaiRequest = (url, callback) => {
// //     return chai.request.execute(app)
// //         .get(url)
// //         .end((err, res) => callback(err, res));
// // };

// // describe("GET /user", () => {
// //     it("Should have status 200", (done) => {
// //         chaiRequest("/user", (err, res) => {
// //             expect(res).to.have.status(200);
// //             done();
// //         })
// //     })
// // })