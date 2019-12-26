import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import Symbol from './shared/Symbol';

describe('isNotUndefined', function() {
  context('given a non-undefined value', function() {
    specify('it should return true', function() {
      assert.isTrue(RA.isNotUndefined(null));
      assert.isTrue(RA.isNotUndefined([]));
      assert.isTrue(RA.isNotUndefined({}));
      assert.isTrue(RA.isNotUndefined(0));
      assert.isTrue(RA.isNotUndefined(''));

      if (Symbol !== 'undefined') {
        assert.isTrue(RA.isNotUndefined(Symbol));
      }
    });
  });

  context('given an undefined value', function() {
    specify('it should return false', function() {
      assert.isFalse(RA.isNotUndefined(void 0));
      assert.isFalse(RA.isNotUndefined(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const isNotUndefined = RA.isNotUndefined(R.__);

    assert.isTrue(isNotUndefined(null));
  });
});
