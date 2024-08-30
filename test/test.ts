import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app';
import { expect } from 'chai';

chai.use(chaiHttp);

const chaiRequest = (url:string, callback:Function) => {
  chai.request(app).get(url).end((err, res) => callback(err, res));
}
describe('API Tests', () => {
    it('should return OKE for GET /', (done) => {
      chaiRequest("/", (err:any, res:any) =>{
        expect(res).to.have.status(200);
        expect(res.text).to.equal('OKE');
        done();
      })
    });
    it('Should return 200 for GET /user/all', (done) => {
      chaiRequest("/user/all", (err:any, res:any) => {
        expect(res).to.have.status(200);
        done();
      })
    })
});