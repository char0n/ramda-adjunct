import chai from 'chai';
import * as RA from '../src/index';
import eq from './shared/eq';


describe('ensureArray', function () {
  it('tests `Array` values', function () {
    const emptyArray = [];
    const filledArray = [42];
    const arrayInstance = new Array();

    chai.assert.strictEqual(RA.ensureArray(emptyArray), emptyArray);
    chai.assert.strictEqual(RA.ensureArray(filledArray), filledArray);
    chai.assert.strictEqual(RA.ensureArray(arrayInstance), arrayInstance);
    chai.assert.strictEqual(RA.ensureArray(Array.prototype), Array.prototype);
  });

  it('tests other values', function () {
    eq(RA.ensureArray(void 0), [void 0]);
    eq(RA.ensureArray({}), [{}]);
    eq(RA.ensureArray(null), [null]);
    eq(RA.ensureArray(undefined), [undefined]);
    eq(RA.ensureArray(42), [42]);
    eq(RA.ensureArray('Array'), ['Array']);
    eq(RA.ensureArray(true), [true]);
    eq(RA.ensureArray(false), [false]);
    eq(RA.ensureArray({ __proto__: Array.prototype }), [{ __proto__: Array.prototype }]);
  });
});
