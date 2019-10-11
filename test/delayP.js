import * as RA from '../src';
import eq from './shared/eq';

describe('delayP', function() {
  it('test delay when passing number as argument', function() {
    return RA.delayP(1000).then(actual => {
      return eq(actual, undefined);
    });
  });

  it('test delay when passing object as argument', function() {
    return RA.delayP({ timeout: 2000, value: 'Hello there' }).then(actual => {
      return eq(actual, 'Hello there');
    });
  });

  it('test delay reject when passing number as argument', function() {
    return RA.delayP.reject(1000).catch(actual => {
      return eq(actual, undefined);
    });
  });

  it('test delay reject when passing object as argument', function() {
    return RA.delayP
      .reject({ timeout: 2000, value: new Error('Gracefull Error') })
      .catch(actual => {
        return eq(actual, new Error('Gracefull Error'));
      });
  });
});
