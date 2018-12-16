import { assert } from 'chai';
import sinon from 'sinon';
import * as R from 'ramda';

import * as RA from '../src/index';

describe('thenP', function() {
  context('given applied on Promise', function() {
    specify(
      'should call then method with onFulfilled function',
      async function() {
        const promise = RA.resolveP(1);
        const expected = await RA.thenP(R.add(1), promise);

        assert.strictEqual(expected, 2);
      }
    );
  });

  context('given applied on Thenable', function() {
    specify(
      'should call then method with onFulfilled function',
      async function() {
        const thenable = { then: fn => RA.resolveP(fn(1)) };
        const expected = await RA.thenP(R.add(1), thenable);

        assert.strictEqual(expected, 2);
      }
    );
  });

  context('given applied on non-thenable', function() {
    specify('should throw TypeError', function() {
      assert.throws(() => RA.thenP(R.identity, {}), TypeError);
    });
  });

  it('should call `then` method on thenable', async function() {
    const then = sinon.stub().returns(RA.resolveP(1));
    const thenable = { then };

    await RA.thenP(R.identity, thenable);
    assert.isTrue(then.calledOnce);
  });

  it('should have arity of 2', function() {
    assert.strictEqual(RA.thenP.length, 2);
  });

  it('should be curried', async function() {
    assert.strictEqual(await RA.thenP(R.identity, RA.resolveP(1)), 1);
    assert.strictEqual(await RA.thenP(R.identity)(RA.resolveP(1)), 1);
  });
});
