import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isAsyncIterable', function () {
  context('given the item is an array with items', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(['arrays', 'are', 'iterable']));
    });
  });

  context(
    'given the item is an Object implementing an asyncIterator',
    function () {
      specify('should return true', function () {
        const asyncIterable = {
          async *[Symbol.asyncIterator]() {
            yield 'Blade';
            yield 'Runner';
          },
        };
        assert.isTrue(RA.isAsyncIterable(asyncIterable));
      });
    }
  );

  context('given the value undefined', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(undefined));
    });
  });

  context('given a number', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(42));
    });
  });

  context('given the value null', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(null));
    });
  });

  context('given the value NaN', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(NaN));
    });
  });

  context('given the value Infinity', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(Infinity));
    });
  });

  context('given a boolean value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(true));
    });
  });

  context('given the value -0', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable(-0));
    });
  });

  context('given an empty object', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isAsyncIterable({}));
    });
  });

  context('should support placeholder to specify "gaps"', function () {
    specify('should return false', function () {
      const isAsyncIterable = RA.isAsyncIterable(R.__);
      const asyncIterable = {
        async *[Symbol.asyncIterator]() {
          yield 'Blade';
          yield 'Runner';
        },
      };

      assert.isTrue(isAsyncIterable(asyncIterable));
    });
  });
});
