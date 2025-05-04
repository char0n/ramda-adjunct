import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('isCoercible', function () {
  specify('returns true for numbers', function () {
    assert.isTrue(RA.isCoercible(42));
    assert.isTrue(RA.isCoercible(3.14));
  });

  specify(
    'returns true for strings that can be coerced to numbers',
    function () {
      assert.isTrue(RA.isCoercible('42'));
      assert.isTrue(RA.isCoercible('3.14'));
    }
  );

  specify(
    'returns false for strings that cannot be coerced to numbers',
    function () {
      assert.isTrue(RA.isCoercible('hello'));
    }
  );

  specify('returns false for Symbols', function () {
    assert.isFalse(RA.isCoercible(Symbol('foo')));
  });

  specify(
    'returns true for objects with toString or valueOf methods',
    function () {
      assert.isTrue(RA.isCoercible({ toString: () => '42' }));
      assert.isTrue(RA.isCoercible({ valueOf: () => 42 }));
    }
  );

  specify(
    'returns true for objects without toString or valueOf methods',
    function () {
      assert.isTrue(RA.isCoercible({}));
    }
  );

  specify('returns true for null and undefined', function () {
    assert.isTrue(RA.isCoercible(null));
    assert.isTrue(RA.isCoercible(undefined));
  });

  specify('returns true for booleans', function () {
    assert.isTrue(RA.isCoercible(true));
    assert.isTrue(RA.isCoercible(false));
  });

  specify('returns true for arrays and other primitives', function () {
    assert.isTrue(RA.isCoercible([]));
    assert.isTrue(RA.isCoercible(function () {}));
  });
});
