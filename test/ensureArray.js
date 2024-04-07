import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('ensureArray', function () {
  context('given argument is not an array', function () {
    specify('should wrap value into singleton array', function () {
      const arrayPrototype = Array.prototype;

      assert.sameOrderedMembers(RA.ensureArray(void 0), [void 0]);
      assert.sameDeepOrderedMembers(RA.ensureArray({}), [{}]);
      assert.sameOrderedMembers(RA.ensureArray(null), [null]);
      assert.sameOrderedMembers(RA.ensureArray(undefined), [undefined]);
      assert.sameOrderedMembers(RA.ensureArray(42), [42]);
      assert.sameOrderedMembers(RA.ensureArray('Array'), ['Array']);
      assert.sameOrderedMembers(RA.ensureArray(true), [true]);
      assert.sameOrderedMembers(RA.ensureArray(false), [false]);
      assert.sameDeepOrderedMembers(
        RA.ensureArray({ __proto__: arrayPrototype }),
        [{ __proto__: arrayPrototype }]
      );
    });
  });

  context('given argument is empty array', function () {
    let emptyArray;

    beforeEach(function () {
      emptyArray = [];
    });

    specify('should return empty array', function () {
      assert.lengthOf(RA.ensureArray(emptyArray), 0);
    });

    specify('should be the same array instance', function () {
      assert.strictEqual(RA.ensureArray(emptyArray), emptyArray);
    });
  });

  context('given argument is filled array', function () {
    let filledArray;

    beforeEach(function () {
      filledArray = [42];
    });

    specify('should return array of length 1', function () {
      assert.lengthOf(RA.ensureArray(filledArray), 1);
    });

    specify('should be the same filled array', function () {
      assert.strictEqual(RA.ensureArray(filledArray), filledArray);
    });
  });

  context('given argument is array instance', function () {
    let arrayInstance;

    beforeEach(function () {
      arrayInstance = new Array();
    });

    specify('should return empty array', function () {
      assert.lengthOf(RA.ensureArray(arrayInstance), 0);
    });

    specify('should be the same array instance', function () {
      assert.strictEqual(RA.ensureArray(arrayInstance), arrayInstance);
    });
  });

  context('given argument is Array.prototype', function () {
    let arrayPrototype;

    beforeEach(function () {
      arrayPrototype = Array.prototype;
    });

    specify('should return empty array', function () {
      assert.lengthOf(RA.ensureArray(arrayPrototype), 0);
    });

    specify('should be the same array instance', function () {
      assert.strictEqual(RA.ensureArray(arrayPrototype), arrayPrototype);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const ensureArray = RA.ensureArray(R.__);

    assert.sameOrderedMembers(ensureArray(1), [1]);
  });
});
