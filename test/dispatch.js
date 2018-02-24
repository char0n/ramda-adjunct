import * as R from 'ramda';
import { assert } from 'chai';
import sinon from 'sinon';

import * as RA from '../src';
import eq from './shared/eq';

describe('dispatch', function() {
  let zeroStub;
  let nullStub;
  let undefinedStub;
  let positiveNumberStub;

  beforeEach(function() {
    zeroStub = sinon.stub().returns(0);
    nullStub = sinon.stub().returns(null);
    undefinedStub = sinon.stub().returns(undefined);
    positiveNumberStub = sinon.stub().returns(1);
  });

  it('should return on first truthy value', function() {
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

  it('returns curried function with max arity', function() {
    const fn = RA.dispatch([R.divide, R.identity]);

    eq(fn.length, 2);
  });

  it('acts as switch', function() {
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

  it('is side effect free', function() {
    const configuredDispatch = RA.dispatch([
      () => {
        throw Error;
      },
      R.always(1),
    ]);

    eq(configuredDispatch('anything'), 1);
  });
});
