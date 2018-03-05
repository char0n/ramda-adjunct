import * as RA from '../src/index';
import eq from './shared/eq';

describe('padEnd', function() {
  it('should pad string', function() {
    eq(RA.padEnd('.-', 6, 'foo'), 'foo.-.');
  });

  it('should work on arrays', function() {
    eq(RA.padEnd([0, 1], 6, [4, 5, 6]), [4, 5, 6, 0, 1, 0]);
  });

  context('toPad is already long enough', function() {
    specify('return toPad', function() {
      eq(RA.padEnd('.-', 6, 'foobar'), 'foobar');
      eq(RA.padEnd('.-', 5, 'foobar'), 'foobar');
      eq(RA.padEnd([0, 1], 2, [4, 5, 6]), [4, 5, 6]);
      eq(RA.padEnd([0, 1], 3, [4, 5, 6]), [4, 5, 6]);
    });
  });
});
