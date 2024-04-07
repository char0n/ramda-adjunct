import { assert } from 'chai';
import * as R from 'ramda';
import sinon from 'sinon';

import * as RA from '../src/index.js';

describe('reduceRightP', function () {
  it('should fold simple functions over arrays with the supplied accumulator', function () {
    const testAdd = RA.reduceRightP(R.add, 0, [1, 2, 3, 4]).then((actual) =>
      assert.strictEqual(actual, 10)
    );
    const testMultiply = RA.reduceRightP(R.multiply, 1, [1, 2, 3, 4]).then(
      (actual) => assert.strictEqual(actual, 24)
    );

    return Promise.all([testAdd, testMultiply]);
  });

  it('should not dispatch to objects that implement `reduce`', function () {
    const obj = {
      x: [1, 2, 3],
      reduce() {
        return 'override';
      },
    };
    const test1 = RA.reduceRightP(R.add, 0, obj).then((actual) =>
      assert.strictEqual(actual, 0)
    );
    const test2 = RA.reduceRightP(R.add, 10, obj).then((actual) =>
      assert.strictEqual(actual, 10)
    );

    return Promise.all([test1, test2]);
  });

  it('should return the accumulator for an empty array', function () {
    const testAdd = RA.reduceRightP(R.add, 0, []).then((actual) =>
      assert.strictEqual(actual, 0)
    );
    const testMultiply = RA.reduceRightP(R.multiply, 1, []).then((actual) =>
      assert.strictEqual(actual, 1)
    );
    const testConcat = RA.reduceRightP(R.concat, [], []).then((actual) =>
      assert.sameOrderedMembers(actual, [])
    );

    return Promise.all([testAdd, testMultiply, testConcat]);
  });

  it('should support an initial value for promise', function () {
    const testAdd = RA.reduceRightP(
      R.add,
      Promise.resolve(0),
      [1, 2, 3, 4]
    ).then((actual) => assert.strictEqual(actual, 10));
    const testMultiply = RA.reduceRightP(
      R.multiply,
      Promise.resolve(1),
      [1, 2, 3, 4]
    ).then((actual) => assert.strictEqual(actual, 24));

    return Promise.all([testAdd, testMultiply]);
  });

  context('given iterable is empty', function () {
    specify('should return initial value', function () {
      const add = sinon.spy();

      return RA.reduceRightP(add, 0, [])
        .then((actual) => assert.strictEqual(actual, 0))
        .then(() => assert.isFalse(add.called));
    });
  });

  context('given iterable is empty (promise version)', function () {
    specify('should return initial value', function () {
      const add = sinon.spy();

      return RA.reduceRightP(add, Promise.resolve(0), [])
        .then((actual) => assert.strictEqual(actual, 0))
        .then(() => assert.isFalse(add.called));
    });
  });

  it('should work with undefined initial value', function () {
    const add = sinon.spy();

    return RA.reduceRightP(add, undefined, [1])
      .then((actual) => assert.strictEqual(actual, 1))
      .then(() => assert.isFalse(add.called));
  });

  it('should work with undefined initial value (promise version)', function () {
    const add = sinon.spy();

    return RA.reduceRightP(add, Promise.resolve(), [1])
      .then((actual) => assert.strictEqual(actual, 1))
      .then(() => assert.isFalse(add.called));
  });

  it('should work with an iterator wrapped in the promise', function () {
    return RA.reduceRightP(R.add, 0, Promise.resolve([1, 2, 3])).then(
      (actual) => assert.strictEqual(actual, 6)
    );
  });

  it('should work with an iterator containing values and promises', function () {
    return RA.reduceRightP(R.add, 0, [1, Promise.resolve(2), 3]).then(
      (actual) => assert.strictEqual(actual, 6)
    );
  });

  it('should work witn an iterator wrapped in promise containing values and promises', function () {
    return RA.reduceRightP(
      R.add,
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then((actual) => assert.strictEqual(actual, 6));
  });

  it('should work with an iterator function returning promises', function () {
    return RA.reduceRightP(
      R.pipe(R.add, Promise.resolve.bind(Promise)),
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then((actual) => assert.strictEqual(actual, 6));
  });

  it('should work similar to reduceP', function () {
    const cat = RA.reduceP(R.concat)('');
    const catRight = RA.reduceRightP(R.concat)('');
    const catRightFlipped = RA.reduceRightP(R.flip(R.concat))('');

    const testCat = cat(['1', '2', '3', '4']).then((actual) =>
      assert.strictEqual(actual, '1234')
    );
    const testCatRight = catRight(['1', '2', '3', '4']).then((actual) =>
      assert.strictEqual(actual, '1234')
    );
    const testCatRightFlipped = catRightFlipped(['1', '2', '3', '4']).then(
      (actual) => assert.strictEqual(actual, '4321')
    );

    return Promise.all([testCat, testCatRight, testCatRightFlipped]);
  });

  it('should be curried', function () {
    const sum = RA.reduceRightP(R.add)(0);
    const cat = RA.reduceRightP(R.concat)('');

    const testSum = sum([1, 2, 3, 4]).then((actual) =>
      assert.strictEqual(actual, 10)
    );
    const testConcat = cat(['1', '2', '3', '4']).then((actual) =>
      assert.strictEqual(actual, '1234')
    );

    return Promise.all([testSum, testConcat]);
  });

  it('should correctly report the arity of curried versions', function () {
    const sum = RA.reduceRightP(R.add, 0);
    assert.strictEqual(sum.length, 1);
  });
});
