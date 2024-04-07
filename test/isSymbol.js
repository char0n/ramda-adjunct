import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isSymbol', function () {
  context('given a Symbol as value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isSymbol(Symbol('any')));
      assert.isTrue(RA.isSymbol(Symbol(1)));
      assert.isTrue(RA.isSymbol(Symbol.iterator));
    });
  });

  context('given anything else as value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isSymbol(undefined));
      assert.isFalse(RA.isSymbol(null));
      assert.isFalse(RA.isSymbol(() => {}));
      assert.isFalse(RA.isSymbol([]));
      assert.isFalse(RA.isSymbol({}));
      assert.isFalse(RA.isSymbol(NaN));
      assert.isFalse(RA.isSymbol(true));
      assert.isFalse(RA.isSymbol('string'));
      assert.isFalse(RA.isSymbol(1));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isSymbol = RA.isSymbol(R.__);

    assert.isFalse(isSymbol('abc'));
  });
});
