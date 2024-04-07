import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('seq', function () {
  it('should perform evaluation in the given order', function () {
    let foo = 2;

    const divide = (x) => {
      foo /= x;
    };
    const multiply = (x) => {
      foo *= x;
    };

    const seqed = RA.seq([multiply, divide])(3);

    assert.strictEqual(seqed, 3);
    assert.strictEqual(foo, 2);
  });

  it('should support transducing', function () {
    const transducer = R.compose(
      R.map(R.inc),
      RA.seq([R.inc]),
      R.filter(RA.isEven)
    );
    const transduced = R.transduce(
      transducer,
      R.flip(R.append),
      [],
      R.range(0, 10)
    );

    assert.sameOrderedMembers(transduced, [2, 4, 6, 8, 10]);
  });

  it('should be curried', function () {
    assert.strictEqual(RA.seq([RA.noop])(3), 3);
  });
});

describe('sequencing', function () {
  it('should be alias of seq', function () {
    assert.strictEqual(RA.sequencing, RA.seq);
  });
});
