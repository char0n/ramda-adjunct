import { assert } from 'chai';
import * as R from 'ramda';
import * as RA from '../src';

describe('thenCatchP', function() {
  context('given applied on Promise', function() {
    specify(
      'should call onFulfilled callback',
      async function() {
        const promise = RA.resolveP(1);
        const expected = await RA.thenCatchP(R.add(1), R.always('danger!'), promise);

        assert.strictEqual(expected, 2);
      }
    );
  });
});
