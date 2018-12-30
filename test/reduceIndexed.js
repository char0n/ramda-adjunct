import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('reduceIndexed', function() {
  context('R.reduce', function() {
    const addition = (a, b) => a + b;
    const mult = (a, b) => a * b;

    it('folds simple functions over arrays with the supplied accumulator', function() {
      eq(R.reduce(addition, 0, [1, 2, 3, 4]), 10);
      eq(R.reduce(mult, 1, [1, 2, 3, 4]), 24);
    });

    it('dispatches to objects that implement `reduce`', function() {
      const obj = {
        x: [1, 2, 3],
        reduce: function fun() {
          return 'override';
        },
      };

      eq(R.reduce(addition, 0, obj), 'override');
      eq(R.reduce(addition, 10, obj), 'override');
    });

    it('returns the accumulator for an empty array', function() {
      eq(R.reduce(addition, 0, []), 0);
      eq(R.reduce(mult, 1, []), 1);
      eq(R.reduce(R.concat, [], []), []);
    });

    it('uses the iterator of an object (and handles short-circuits)', function() {
      const symIterator =
        typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

      function Reducible(arr) {
        this.arr = arr;
      }

      Reducible.prototype[symIterator] = function() {
        const a = this.arr;
        return {
          _pos: 0,
          next: function fn() {
            if (this._pos < a.length) {
              const v = a[this._pos];
              this._pos += 1;
              return {
                value: v,
                done: false,
              };
            }
            return {
              done: true,
            };
          },
        };
      };

      const xf = R.take(2);
      const apendingT = {};
      apendingT['@@transducer/result'] = R.identity;
      apendingT['@@transducer/step'] = R.flip(R.append);

      const rfn = xf(apendingT);
      const list = new Reducible([1, 2, 3, 4, 5, 6]);

      eq(R.reduce(rfn, [], list), [1, 2]);
    });
  });

  context('documentation example', function() {
    specify('should join idx and value with a "-"', function() {
      const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];
      const resultAcc = '-f0-o1-o2-b3-a4-r5';

      eq(
        RA.reduceIndexed(
          (acc, val, idx) => `${acc}-${val}${idx}`,
          '',
          initialList
        ),
        resultAcc
      );
    });
  });

  context('fourth argument', function() {
    const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];

    specify('should be the same reference that original list', function() {
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
});
