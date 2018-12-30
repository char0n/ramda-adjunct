import * as RA from '../src';
import eq from './shared/eq';

describe('noop', function() {
  it('tests `function` that performs no operations', function() {
    eq(RA.noop(), undefined);
    eq(RA.noop([1]), undefined);
    eq(RA.noop(new Array()), undefined);
    eq(RA.noop(1, 2, 3), undefined);
  });
});
