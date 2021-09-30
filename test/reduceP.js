import { assert } from 'chai';
import * as R from 'ramda';
import sinon from 'sinon';

import * as RA from '../src';

describe('reduceP', function () {
  it('should fold simple functions over arrays with the supplied accumulator', function () {
    const testAdd = RA.reduceP(R.add, 0, [1, 2, 3, 4]).then((actual) =>
      assert.strictEqual(actual, 10)
    );
    const testMultiply = RA.reduceP(R.multiply, 1, [1, 2, 3, 4]).then(
      (actual) => assert.strictEqual(actual, 24)
    );

    return Promise.all([testAdd, testMultiply]);
  });

  it('should dispatch to objects that implement `reduce`', function () {
    const obj = {
      x: [1, 2, 3],
      reduce() {
        return 'override';
      },
    };
    const test1 = RA.reduceP(R.add, 0, obj).then((actual) =>
      assert.strictEqual(actual, 'override')
    );
    const test2 = RA.reduceP(R.add, 10, obj).then((actual) =>
      assert.strictEqual(actual, 'override')
    );

    return Promise.all([test1, test2]);
  });

  it('should return the accumulator for an empty array', function () {
    const testAdd = RA.reduceP(R.add, 0, []).then((actual) =>
      assert.strictEqual(actual, 0)
    );
    const testMultiply = RA.reduceP(R.multiply, 1, []).then((actual) =>
      assert.strictEqual(actual, 1)
    );
    const testConcat = RA.reduceP(R.concat, [], []).then((actual) =>
      assert.sameOrderedMembers(actual, [])
    );

    return Promise.all([testAdd, testMultiply, testConcat]);
  });

  it('should support an initial value for promise', function () {
    const testAdd = RA.reduceP(R.add, Promise.resolve(0), [1, 2, 3, 4]).then(
      (actual) => assert.strictEqual(actual, 10)
    );
    const testMultiply = RA.reduceP(
      R.multiply,
      Promise.resolve(1),
      [1, 2, 3, 4]
    ).then((actual) => assert.strictEqual(actual, 24));

    return Promise.all([testAdd, testMultiply]);
  });

  context('given iterable is empty', function () {
    specify('should return initial vlaue', function () {
      const add = sinon.spy();

      return RA.reduceP(add, 0, [])
        .then((actual) => assert.strictEqual(actual, 0))
        .then(() => assert.isFalse(add.called));
    });
  });

  context('given iterable is empty (promise version)', function () {
    specify('should return initial value', function () {
      const add = sinon.spy();

      return RA.reduceP(add, Promise.resolve(0), [])
        .then((actual) => assert.strictEqual(actual, 0))
        .then(() => assert.isFalse(add.called));
    });
  });

  it('should work with undefined initial value', function () {
    const add = sinon.spy();

    return RA.reduceP(add, undefined, [1])
      .then((actual) => assert.strictEqual(actual, 1))
      .then(() => assert.isFalse(add.called));
  });

  it('should work with undefined initial value (promise version)', function () {
    const add = sinon.spy();

    return RA.reduceP(add, Promise.resolve(), [1])
      .then((actual) => assert.strictEqual(actual, 1))
      .then(() => assert.isFalse(add.called));
  });

  it('should work with an iterator wrapped in the promise', function () {
    return RA.reduceP(R.add, 0, Promise.resolve([1, 2, 3])).then((actual) =>
      assert.strictEqual(actual, 6)
    );
  });

  it('should work with an iterator containing values and promises', function () {
    return RA.reduceP(R.add, 0, [1, Promise.resolve(2), 3]).then((actual) =>
      assert.strictEqual(actual, 6)
    );
  });

  it('should work with an iterator wrapped in promise containing values and promises', function () {
    return RA.reduceP(
      R.add,
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then((actual) => assert.strictEqual(actual, 6));
  });

  it('should work with an iterator function returning promises', function () {
    return RA.reduceP(
      R.pipe(R.add, Promise.resolve.bind(Promise)),
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then((actual) => assert.strictEqual(actual, 6));
  });

  it('should prefer the use of the iterator of an object over reduce (and handles short-circuits)', function () {
    // no support for @@transducer protocol yet
  });

  it('should be curried', function () {
    const sum = RA.reduceP(R.add)(0);
    const cat = RA.reduceP(R.concat)('');

    const testSum = sum([1, 2, 3, 4]).then((actual) =>
      assert.strictEqual(actual, 10)
    );
    const testConcat = cat(['1', '2', '3', '4']).then((actual) =>
      assert.strictEqual(actual, '1234')
    );

    return Promise.all([testSum, testConcat]);
  });

  it('should correctly report the arity of curried versions', function () {
    const sum = RA.reduceP(R.add, 0);
    assert.strictEqual(sum.length, 1);
  });
});
