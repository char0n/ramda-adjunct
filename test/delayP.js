import * as RA from '../src';
import eq from './shared/eq';

describe('delayP', function() {
  it('test delay when passing number as argument', function(done) {
    RA.delayP(1000).then(actual => {
      eq(actual, undefined);
      done();
    });
  });

  it('test delay when passing object as argument', function(done) {
    RA.delayP({ timeout: 200, value: 'Hello there' }).then(actual => {
      eq(actual, 'Hello there');
      done();
    });
  });

  it('test delay reject when passing number as argument', function(done) {
    RA.delayP.reject(1000).catch(actual => {
      eq(actual, undefined);
      done();
    });
  });

  it('test delay reject when passing object as argument', function(done) {
    RA.delayP
      .reject({ timeout: 900, value: new Error('Gracefull Error') })
      .catch(actual => {
        eq(actual, new Error('Gracefull Error'));
        done();
      });
  });
});
