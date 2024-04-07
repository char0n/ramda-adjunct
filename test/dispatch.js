import * as R from 'ramda';
import { assert } from 'chai';
import sinon from 'sinon';

import * as RA from '../src/index.js';

describe('dispatch', function () {
  it('should return first non-nil value', function () {
    const nullStub = sinon.stub().returns(null);
    const undefinedStub = sinon.stub().returns(undefined);
    const zeroStub = sinon.stub().returns(0);
    const positiveNumberStub = sinon.stub().returns(1);

    const actual = RA.dispatch([
      nullStub,
      undefinedStub,
      zeroStub,
      positiveNumberStub,
    ])('test');

    assert.strictEqual(actual, 0);
    assert.isTrue(nullStub.calledOnceWithExactly('test'));
    assert.isTrue(undefinedStub.calledOnceWithExactly('test'));
    assert.isTrue(zeroStub.calledOnceWithExactly('test'));
    assert.isTrue(positiveNumberStub.notCalled);
  });

  it('should return curried function with max arity', function () {
    const fn = RA.dispatch([R.divide, R.identity]);

    assert.strictEqual(fn.length, 2);
  });

  it('should act as switch', function () {
    const isString = sinon.stub().returns(false);
    const stringDispatch = sinon.stub().returns(undefined);
    const isNumber = sinon.stub().returns(true);
    const numberDispatch = sinon.stub().returns(true);
    const isDate = sinon.stub().returns(false);
    const dateDispatch = sinon.stub().returns(false);

    const fnSwitch = RA.dispatch([
      R.ifElse(isString, stringDispatch, RA.stubUndefined),
      R.ifElse(isNumber, numberDispatch, RA.stubUndefined),
      R.ifElse(isDate, dateDispatch, RA.stubUndefined),
    ]);
    fnSwitch(1);

    assert.isTrue(isString.calledOnceWithExactly(1));
    assert.isTrue(stringDispatch.notCalled);
    assert.isTrue(isNumber.calledOnceWithExactly(1));
    assert.isTrue(numberDispatch.calledOnceWithExactly(1));
    assert.isTrue(isDate.notCalled);
    assert.isTrue(dateDispatch.notCalled);
  });

  context('given dispatched function throws', function () {
    context('the error', function () {
      specify('should bubble up', function () {
        const configuredDispatch = RA.dispatch([
          () => {
            throw new Error();
          },
          R.always(1),
        ]);

        assert.throws(() => configuredDispatch('test'));
      });
    });
  });

  context('given empty array provided as input', function () {
    specify('should return undefined', function () {
      assert.isUndefined(RA.dispatch([]));
    });
  });

  context('given all dispatched functions returns nil', function () {
    specify('should return undefined', function () {
      const configuredDispatch = RA.dispatch([RA.stubUndefined, RA.stubNull]);

      assert.isUndefined(configuredDispatch());
    });
  });

  context(
    'given all dispatched functions have implicit return statement',
    function () {
      specify('should return undefined', function () {
        const configuredDispatch = RA.dispatch([() => {}, () => {}]);

        assert.isUndefined(configuredDispatch());
      });
    }
  );

  it('should support placeholder to specify "gaps"', function () {
    const dispatch = RA.dispatch(R.__);

    assert.strictEqual(dispatch([RA.stubNull, R.always(1)])(), 1);
  });
});
