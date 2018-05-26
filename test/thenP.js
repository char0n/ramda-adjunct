import { assert } from 'chai';
import sinon from 'sinon';
import * as R from 'ramda';

import * as RA from '../src/index';

describe('thenP', function() {
  context('given applied on Promise', function() {
    specify('should call then method with onFulfilled function', function() {
      const promise = RA.resolveP(1);
      const expected = RA.thenP(R.add(1), promise);

      assert.eventually.strictEqual(expected, 2);
    });
  });

  context('given applied on Thenable', function() {
    specify('should call then method with onFulfilled function', function() {
      const thenable = { then: fn => RA.resolveP(fn(1)) };
      const expected = RA.thenP(R.add(1), thenable);

      assert.eventually.strictEqual(expected, 2);
    });
  });

  context('given applied on non-thenable', function() {
    specify('should throw TypeError', function() {
      assert.throws(() => RA.thenP(R.identity, {}), TypeError);
    });
  });

  it('should call `then` method on thenable', function(done) {
    const then = sinon.stub().returns(RA.resolveP(1));
    const thenable = { then };
    const expected = RA.thenP(R.identity, thenable);

    expected.then(() => {
      assert.isTrue(then.calledOnce);
      done();
    });
  });

  it('should have arity of 2', function() {
    assert.strictEqual(RA.thenP.length, 2);
  });

  it('should be curried', function() {
    assert.eventually.strictEqual(RA.thenP(R.identity, RA.resolveP(1)), 1);
    assert.eventually.strictEqual(RA.thenP(R.identity)(RA.resolveP(1)), 1);
  });
});
