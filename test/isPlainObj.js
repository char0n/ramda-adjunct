import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import element from './shared/element';
import args from './shared/arguments';

class Bar {
  constructor() {
    this.prop = 'value';
  }
}

describe('isPlainObj', function () {
  context('given a POJO value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPlainObj({}));
      assert.isTrue(RA.isPlainObj({ prop: 'value' }));
      assert.isTrue(RA.isPlainObj({ constructor: Bar }));
    });
  });

  context('given a non POJO value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPlainObj(new Bar()));
      assert.isFalse(RA.isPlainObj(['a', 'b', 'c']));
    });
  });

  context('given a value with prototype of null', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPlainObj(Object.create(null)));

      const object = Object.create(null);
      object.constructor = Object.prototype.constructor;

      assert.isTrue(RA.isPlainObj(object));
    });
  });

  context('given a value with `valueOf` property', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPlainObj({ valueOf: 1 }));
    });
  });

  context('given a value with custom prototype', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isPlainObj(Object.create({ a: 3 })));
    });
  });

  context('given a value that is DOM element', function () {
    specify('should return false', function () {
      if (element) {
        assert.isFalse(RA.isPlainObj(element));
      }
    });
  });

  context('given a non-object value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPlainObj(args));
      assert.isFalse(RA.isPlainObj(Error));
      assert.isFalse(RA.isPlainObj(Math));
      assert.isFalse(RA.isPlainObj(true));
      assert.isFalse(RA.isPlainObj('abc'));
    });
  });

  context('given a Symbol value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPlainObj(Symbol.for('symbol')));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPlainObj = RA.isPlainObj(R.__);

    assert.isTrue(isPlainObj({}));
  });
});

describe('isPlainObject', function () {
  it('should be an alias for isPlainObj', function () {
    assert.strictEqual(RA.isPlainObj, RA.isPlainObject);
  });
});
