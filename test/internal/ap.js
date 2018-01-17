import { add, multiply } from 'ramda';

import eq from '../shared/eq';
import _ap from '../../src/internal/ap';
import Identity from '../../src/fantasy-land/Identity';


describe('ap', function () {
  const m1 = Identity.of(1);
  const m2 = Identity.of(2).map(add);

  it('tests new fantasyland spec compatibility', function () {
    eq(_ap(m1, m2), Identity.of(3));
  });

  it('tests old fantasyland spec compatibility', function () {
    eq(_ap(m2, m1), Identity.of(3));
  });

  it('tests for non Apply spec', function () {
    eq(_ap([multiply(2), add(3)], [1, 2, 3]), [2, 4, 6, 4, 5, 6]);
  });
});
