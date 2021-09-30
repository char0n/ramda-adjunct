import { assert } from 'chai';
import * as R from 'ramda';

import _ap from '../../src/internal/ap';
import Identity from '../../src/fantasy-land/Identity';

describe('ap', function () {
  const m1 = Identity.of(1);
  const m2 = Identity.of(2).map(R.add);

  it('tests new fantasyland spec compatibility', function () {
    assert.isTrue(R.equals(_ap(m1, m2), Identity.of(3)));
  });

  it('tests old fantasyland spec compatibility', function () {
    assert.isTrue(R.equals(_ap(m2, m1), Identity.of(3)));
  });

  it('tests for non Apply spec', function () {
    assert.sameOrderedMembers(
      _ap([R.multiply(2), R.add(3)], [1, 2, 3]),
      [2, 4, 6, 4, 5, 6]
    );
  });
});
