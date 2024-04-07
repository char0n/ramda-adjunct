import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('catchP', function () {
  context('given applied on Promise', function () {
    specify(
      'should call catch method with onRejected function',
      async function () {
        const promise = RA.rejectP(1);
        const expected = await RA.catchP(R.add(1), promise);

        assert.strictEqual(expected, 2);
      }
    );
  });

  context('given applied on Thenable', function () {
    specify('should throw TypeError', function () {
      const thenable = { then: (fn) => RA.rejectP(fn(1)) };

      assert.throws(() => RA.catchP(R.identity, thenable), TypeError);
    });
  });

  context('given applied on non-thenable', function () {
    specify('should throw TypeError', function () {
      assert.throws(() => RA.catchP(R.identity, {}), TypeError);
    });
  });

  it('should be curried', async function () {
    assert.strictEqual(await RA.catchP(R.identity, RA.rejectP(1)), 1);
    assert.strictEqual(await RA.catchP(R.identity)(RA.rejectP(1)), 1);
  });
});
