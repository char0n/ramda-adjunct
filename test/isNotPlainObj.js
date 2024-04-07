import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import element from './shared/element.js';
import args from './shared/arguments.js';

class Bar {
  constructor() {
    this.prop = 'value';
  }
}

describe('isNotPlainObj', function () {
  context('given a POJO value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPlainObj({}));
      assert.isFalse(RA.isNotPlainObj({ prop: 'value' }));
      assert.isFalse(RA.isNotPlainObj({ constructor: Bar }));
    });
  });

  context('given a non-POJO value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotPlainObj(new Bar()));
      assert.isTrue(RA.isNotPlainObj(['a', 'b', 'c']));
    });
  });

  context('given a value with prototype of null', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPlainObj(Object.create(null)));

      const object = Object.create(null);
      object.constructor = Object.prototype.constructor;

      assert.isFalse(RA.isNotPlainObj(object));
    });
  });

  context('given a value with `valueOf` property', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPlainObj({ valueOf: 1 }));
    });
  });

  context('given a value with custom prototype', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotPlainObj(Object.create({ a: 3 })));
    });
  });

  context('given a DOM elemen value', function () {
    specify('should return true', function () {
      if (element) {
        assert.isTrue(RA.isNotPlainObj(element));
      }
    });
  });

  context('given a non-object value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotPlainObj(args));
      assert.isTrue(RA.isNotPlainObj(Error));
      assert.isTrue(RA.isNotPlainObj(Math));
      assert.isTrue(RA.isNotPlainObj(true));
      assert.isTrue(RA.isNotPlainObj('abc'));
    });
  });

  context('given a symbol value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotPlainObj(Symbol.for('symbol')));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotPlainObj = RA.isNotPlainObj(R.__);

    assert.isTrue(isNotPlainObj(null));
  });
});

describe('isNotPlainObject', function () {
  it('should be an alias for isNotPlainObj', function () {
    assert.strictEqual(RA.isNotPlainObj, RA.isNotPlainObject);
  });
});
