import * as R from 'ramda';
import sinon from 'sinon';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('reduceP', function() {
  it('folds simple functions over arrays with the supplied accumulator', function() {
    const testAdd = RA.reduceP(R.add, 0, [1, 2, 3, 4]).then(actual =>
      eq(actual, 10)
    );
    const testMultiply = RA.reduceP(R.multiply, 1, [1, 2, 3, 4]).then(actual =>
      eq(actual, 24)
    );

    return Promise.all([testAdd, testMultiply]);
  });

  it('dispatches to objects that implement `reduce`', function() {
    const obj = {
      x: [1, 2, 3],
      reduce() {
        return 'override';
      },
    };
    const test1 = RA.reduceP(R.add, 0, obj).then(actual =>
      eq(actual, 'override')
    );
    const test2 = RA.reduceP(R.add, 10, obj).then(actual =>
      eq(actual, 'override')
    );

    return Promise.all([test1, test2]);
  });

  it('returns the accumulator for an empty array', function() {
    const testAdd = RA.reduceP(R.add, 0, []).then(actual => eq(actual, 0));
    const testMultiply = RA.reduceP(R.multiply, 1, []).then(actual =>
      eq(actual, 1)
    );
    const testConcat = RA.reduceP(R.concat, [], []).then(actual =>
      eq(actual, [])
    );

    return Promise.all([testAdd, testMultiply, testConcat]);
  });

  it('is curried', function() {
    const sum = RA.reduceP(R.add)(0);
    const cat = RA.reduceP(R.concat)('');

    const testSum = sum([1, 2, 3, 4]).then(actual => eq(actual, 10));
    const testConcat = cat(['1', '2', '3', '4']).then(actual =>
      eq(actual, '1234')
    );

    return Promise.all([testSum, testConcat]);
  });

  it('correctly reports the arity of curried versions', function() {
    const sum = RA.reduceP(R.add, 0);
    eq(sum.length, 1);
  });

  it('tests initial value for promise', function() {
    const testAdd = RA.reduceP(R.add, Promise.resolve(0), [1, 2, 3, 4]).then(
      actual => eq(actual, 10)
    );
    const testMultiply = RA.reduceP(R.multiply, Promise.resolve(1), [
      1,
      2,
      3,
      4,
    ]).then(actual => eq(actual, 24));

    return Promise.all([testAdd, testMultiply]);
  });

  context('given iterable is empty', function() {
    specify('should return initial vlaue', function() {
      const add = sinon.spy();

      return RA.reduceP(add, 0, [])
        .then(actual => eq(actual, 0))
        .then(() => eq(add.called, false));
    });
  });

  context('given iterable is empty (promise version)', function() {
    specify('should return initial value', function() {
      const add = sinon.spy();

      return RA.reduceP(add, Promise.resolve(0), [])
        .then(actual => eq(actual, 0))
        .then(() => eq(add.called, false));
    });
  });

  it('tests if initial value is undefined', function() {
    const add = sinon.spy();

    return RA.reduceP(add, undefined, [1])
      .then(actual => eq(actual, 1))
      .then(() => eq(add.called, false));
  });

  it('tests if initial value is undefined (promise version)', function() {
    const add = sinon.spy();

    return RA.reduceP(add, Promise.resolve(), [1])
      .then(actual => eq(actual, 1))
      .then(() => eq(add.called, false));
  });

  it('tests iterator wrapped in the promise', function() {
    return RA.reduceP(R.add, 0, Promise.resolve([1, 2, 3])).then(actual =>
      eq(actual, 6)
    );
  });

  it('tests iterator containing values and promises', function() {
    return RA.reduceP(R.add, 0, [1, Promise.resolve(2), 3]).then(actual =>
      eq(actual, 6)
    );
  });

  it('tests iterator wrapped in promise containing values and promises', function() {
    return RA.reduceP(
      R.add,
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then(actual => eq(actual, 6));
  });

  it('tests iterator function returning promises', function() {
    return RA.reduceP(
      R.pipe(
        R.add,
        Promise.resolve.bind(Promise)
      ),
      0,
      Promise.resolve([1, Promise.resolve(2), 3])
    ).then(actual => eq(actual, 6));
  });

  it('prefers the use of the iterator of an object over reduce (and handles short-circuits)', function() {
    // no support for @@transducer protocol yet
  });
});
