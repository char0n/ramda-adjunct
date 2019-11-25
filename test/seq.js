import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('seq', function() {
  it('tests calling uncurried', function() {
    assert.strictEqual(RA.seq([RA.noop], 3), 3);
  });

  it('tests calling curried', function() {
    assert.strictEqual(RA.seq([RA.noop])(3), 3);
  });

  it('tests ordered evaluation', function() {
    let foo = 2;

    const divide = x => {
      foo /= x;
    };
    const multiply = x => {
      foo *= x;
    };

    const seqed = RA.seq([multiply, divide])(3);

    assert.strictEqual(seqed, 3);
    assert.strictEqual(foo, 2);
  });

  it('tests transducing', function() {
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

  it('tests an alias', function() {
    assert.strictEqual(RA.sequencing([RA.noop])(0), 0);
  });
});
