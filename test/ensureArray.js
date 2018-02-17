import { assert } from 'chai';
import * as RA from '../src/index';
import eq from './shared/eq';


describe('ensureArray', function () {
  const emptyArray = [];
  const filledArray = [42];
  const arrayInstance = new Array();
  const arrayPrototype = Array.prototype;

  it('tests `Array` values', function () {
    assert.strictEqual(RA.ensureArray(emptyArray), emptyArray);
    assert.strictEqual(RA.ensureArray(filledArray), filledArray);
    assert.strictEqual(RA.ensureArray(arrayInstance), arrayInstance);
    assert.strictEqual(RA.ensureArray(arrayPrototype), arrayPrototype);
  });

  it('returns non-Array values as the only element of a new Array', function () {
    eq(RA.ensureArray(void 0), [void 0]);
    eq(RA.ensureArray({}), [{}]);
    eq(RA.ensureArray(null), [null]);
    eq(RA.ensureArray(undefined), [undefined]);
    eq(RA.ensureArray(42), [42]);
    eq(RA.ensureArray('Array'), ['Array']);
    eq(RA.ensureArray(true), [true]);
    eq(RA.ensureArray(false), [false]);
    eq(RA.ensureArray({ __proto__: arrayPrototype }), [{ __proto__: arrayPrototype }]);
  });
});
