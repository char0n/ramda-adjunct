import * as R from 'ramda';
import { assert } from 'chai';
import sinon from 'sinon';

import * as RA from '../src';
import eq from './shared/eq';

describe('dispatch', function() {
  it('should return first truthy value', function() {
    const zeroStub = sinon.stub().returns(0);
    const nullStub = sinon.stub().returns(null);
    const undefinedStub = sinon.stub().returns(undefined);
    const positiveNumberStub = sinon.stub().returns(1);

    const actual = RA.dispatch([
      zeroStub,
      nullStub,
      positiveNumberStub,
      undefinedStub,
    ])('test');

    assert.strictEqual(actual, 1);
    assert.isTrue(zeroStub.calledOnceWithExactly('test'));
    assert.isTrue(nullStub.calledOnceWithExactly('test'));
    assert.isTrue(positiveNumberStub.calledOnceWithExactly('test'));
    assert.isTrue(undefinedStub.notCalled);
  });

  it('should return curried function with max arity', function() {
    const fn = RA.dispatch([R.divide, R.identity]);

    eq(fn.length, 2);
  });

  it('should act as switch', function() {
    const isString = sinon.stub().returns(false);
    const stringDispatch = sinon.stub().returns(undefined);
    const isNumber = sinon.stub().returns(true);
    const numberDispatch = sinon.stub().returns(true);
    const isDate = sinon.stub().returns(false);
    const dateDispatch = sinon.stub().returns(false);

    const fnSwitch = RA.dispatch([
      R.ifElse(isString, stringDispatch, R.F),
      R.ifElse(isNumber, numberDispatch, R.F),
      R.ifElse(isDate, dateDispatch, R.F),
    ]);
    fnSwitch(1);

    assert.isTrue(isString.calledOnceWithExactly(1));
    assert.isTrue(stringDispatch.notCalled);
    assert.isTrue(isNumber.calledOnceWithExactly(1));
    assert.isTrue(numberDispatch.calledOnceWithExactly(1));
    assert.isTrue(isDate.notCalled);
    assert.isTrue(dateDispatch.notCalled);
  });

  it('should be side effect free', function() {
    const configuredDispatch = RA.dispatch([
      () => {
        throw Error;
      },
      R.always(1),
    ]);

    eq(configuredDispatch('anything'), 1);
  });

  context('when empty array provided as input', function() {
    specify('should return undefined', function() {
      eq(RA.dispatch([]), undefined);
    });
  });

  context('when all dispatched functions returns falsy', function() {
    specify('should return undefined', function() {
      const configuredDispatch = RA.dispatch([R.F, R.always(0), RA.stubNull]);

      eq(configuredDispatch(), undefined);
    });
  });
});
