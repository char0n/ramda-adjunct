import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotObj', function() {
  context('given non object value', function() {
    specify('should return true', function() {
      assert.isTrue(RA.isNotObj(null));
      assert.isTrue(RA.isNotObj(undefined));
    });
  });

  context('given object value', function() {
    specify('should return false', function() {
      assert.isFalse(RA.isNotObj({}));
      assert.isFalse(RA.isNotObj(Object(false)));
      assert.isFalse(RA.isNotObj(Object.create(null)));
      assert.isFalse(RA.isNotObj(args));
      assert.isFalse(RA.isNotObj([1, 2, 3]));
      assert.isFalse(RA.isNotObj(Object(false)));
      assert.isFalse(RA.isNotObj(new Date()));
      assert.isFalse(RA.isNotObj(new Error()));
      assert.isFalse(RA.isNotObj(RA));
      assert.isFalse(RA.isNotObj(Array.prototype.slice));
      assert.isFalse(RA.isNotObj({ a: 1 }));
      assert.isFalse(RA.isNotObj(Object(0)));
      assert.isFalse(RA.isNotObj(/x/));
      assert.isFalse(RA.isNotObj(Object('a')));

      if (Symbol !== 'undefined') {
        assert.isFalse(RA.isNotObj(Symbol));
      }
    });
  });

  /*
   We have a bug here
   RA.isNotObj(R.__) returns false. I think the problem is in
   src/isObj.js because src/isNotObj.js is a complement(isObj)
   and RA.isObj(R.__) just returns true, so I think we need to
   refactor src/isObj.js to eliminate the bug.
  */
  it('should support placeholder to specify "gaps"', function() {
    const isNotObj = RA.isNotObj(R.__);

    assert.isTrue(isNotObj(null));
  });
});

describe('isNotObject', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isNotObj, RA.isNotObject);
  });
});
