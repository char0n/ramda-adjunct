import * as RA from '../src/index';
import eq from './shared/eq';

describe('stubObj', function() {
  it('tests `function` that returns `{}`', function() {
    eq(RA.stubObj(), {});
    eq(RA.stubObj([1]), {});
    eq(RA.stubObj(new Array()), {});
    eq(RA.stubObj(1, 2, 3), {});
  });
});
