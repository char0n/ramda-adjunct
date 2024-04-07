import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('reduceIndexed', function () {
  const addition = (a, b) => a + b;
  const mult = (a, b) => a * b;

  it('should fold simple functions over arrays with the supplied accumulator', function () {
    assert.strictEqual(RA.reduceIndexed(addition, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(RA.reduceIndexed(mult, 1, [1, 2, 3, 4]), 24);
  });

  it('should dispatch to objects that implement `reduce`', function () {
    const obj = {
      x: [1, 2, 3],
      reduce: function fun() {
        return 'override';
      },
    };

    assert.strictEqual(RA.reduceIndexed(addition, 0, obj), 'override');
    assert.strictEqual(RA.reduceIndexed(addition, 10, obj), 'override');
  });

  it('should return the accumulator for an empty array', function () {
    assert.strictEqual(RA.reduceIndexed(addition, 0, []), 0);
    assert.strictEqual(RA.reduceIndexed(mult, 1, []), 1);
    assert.sameOrderedMembers(RA.reduceIndexed(R.concat, [], []), []);
  });

  context('given documentation example', function () {
    specify('should join idx and value with a "-"', function () {
      const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];
      const resultAcc = '-f0-o1-o2-b3-a4-r5';

      assert.strictEqual(
        RA.reduceIndexed(
          (acc, val, idx) => `${acc}-${val}${idx}`,
          '',
          initialList
        ),
        resultAcc
      );
    });
  });

  context('given a callback with the fourth argument', function () {
    const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];

    specify('should supply to it an original list reference', function () {
      RA.reduceIndexed(
        (acc, val, idx, list) => {
          assert.strictEqual(list, initialList);
          return acc;
        },
        '',
        initialList
      );
    });
  });

  it('should be curried', function () {
    assert.strictEqual(RA.reduceIndexed(addition, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(RA.reduceIndexed(addition)(0, [1, 2, 3, 4]), 10);
    assert.strictEqual(RA.reduceIndexed(addition, 0)([1, 2, 3, 4]), 10);
    assert.strictEqual(RA.reduceIndexed(addition)(0)([1, 2, 3, 4]), 10);
  });
});
