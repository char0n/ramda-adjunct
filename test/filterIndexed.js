import { assert } from 'chai';

import * as RA from '../src';

describe('filterIndexed', function () {
  const listXf = {
    '@@transducer/init': () => [],
    '@@transducer/step': (acc, x) => acc.concat([x]),
    '@@transducer/result': (x) => x,
  };

  const isEven = (x) => x % 2 === 0;
  const isValueGtIndex = (val, index) => val > index;

  context('R.filter', function () {
    it('should filter arrays based on a simple predicate', function () {
      assert.deepEqual(RA.filterIndexed(isEven, []), []);
      assert.deepEqual(RA.filterIndexed(isEven, [0, 1, 2, 3, 4]), [0, 2, 4]);
    });

    it('should filter objects based on a simple predicate', function () {
      assert.deepEqual(RA.filterIndexed(isEven, {}), {});
      assert.deepEqual(
        RA.filterIndexed(isEven, { a: 0, b: 1, c: 2, d: 3, e: 4 }),
        { a: 0, c: 2, e: 4 }
      );
    });

    it('should filter strings based on a simple predicate', function () {
      const isVowel = (v) => 'aeiou'.includes(v.toLowerCase());

      assert.deepEqual(RA.filterIndexed(isVowel, ''), []);
      assert.deepEqual(
        RA.filterIndexed(
          isVowel,
          'The quick brown fox jumps over the lazy dog'
        ),
        ['e', 'u', 'i', 'o', 'o', 'u', 'o', 'e', 'e', 'a', 'o']
      );
    });

    it('should dispatch to objects that implement `filter`', function () {
      const obj = {
        content: [0, 1, 2, 3, 4],
        filter(f) {
          return this.content.filter(f);
        },
      };

      assert.deepEqual(RA.filterIndexed(isEven, obj), [0, 2, 4]);
    });

    it('should dispatch to transformer objects', function () {
      const result = RA.filterIndexed(isEven, listXf);

      assert.deepEqual(result.xf, listXf);
      assert.strictEqual(result.f(0), true);
    });

    it('should throw a TypeError on null and undefined', function () {
      assert.throws(() => RA.filterIndexed(isEven, null), TypeError);

      assert.throws(() => RA.filterIndexed(isEven, undefined), TypeError);
    });

    it('should support transducer-style composition', function () {
      const fvalGtIndex = RA.filterIndexed(isValueGtIndex);
      const feven = RA.filterIndexed(isEven);
      const xcomp = feven(fvalGtIndex(listXf));

      assert.deepEqual(xcomp.xf.xf, listXf);
      assert.strictEqual(xcomp.xf.f(11, 12), false);
      assert.strictEqual(xcomp.f(2), true);
    });
  });

  it('should correctly use val and idx arguments', function () {
    const list = [5, 4, 3, 2, 1, 0];

    assert.deepEqual(RA.filterIndexed(isValueGtIndex, list), [5, 4, 3]);
  });

  context('given third argument', function () {
    const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];

    specify(
      'the third argument should be the same reference that original list',
      function () {
        RA.filterIndexed((_, __, list) => {
          assert.strictEqual(list, initialList);

          return true;
        }, initialList);
      }
    );
  });

  it('should be curried', function () {
    const list = [1, 2, 3];

    assert.sameOrderedMembers(
      RA.filterIndexed(isEven)(list),
      RA.filterIndexed(isEven, list)
    );
  });
});
