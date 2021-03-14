import { assert } from 'chai';

import * as RA from '../src';

describe('findOr', function () {
  context('given a list with a matching value', function () {
    context('and that value is not Nil nor NaN', function () {
      specify('should return the found value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3];
        const predicate = (val) => val === 1;

        assert.strictEqual(RA.findOr(defaultValue, predicate, list), 1);
      });
    });

    context('and that value is NaN', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, NaN];
        const predicate = (val) => RA.isNaN(val);

        assert.strictEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });

    context('and that value is null', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, null];
        const predicate = (val) => val === null;

        assert.strictEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });

    context('and that value is undefined', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, null];
        const predicate = (val) => val === undefined;

        assert.strictEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });
  });

  context('given a list without a matching value', function () {
    specify('should return the default value', function () {
      const defaultValue = 'default';
      const list = [1, 2, 3];
      const predicate = (val) => val === 4;

      assert.strictEqual(RA.findOr(defaultValue, predicate, list), defaultValue);
    });
  });
});
