import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('thenCatchP', function () {
  context('given fulfilled Promise', function () {
    specify('should call "onFulfilled" callback', async function () {
      const promise = RA.resolveP(1);
      const expected = await RA.thenCatchP(
        R.add(1),
        R.always('danger!'),
        promise
      );

      assert.strictEqual(expected, 2);
    });
  });

  context('given rejected Promise', function () {
    specify('should call "onRejected" callback', async function () {
      const promise = RA.rejectP('a');
      const expected = await RA.thenCatchP(
        R.add(1),
        R.always('danger!'),
        promise
      );

      assert.strictEqual(expected, 'danger!');
    });
  });

  it('should curry', async function () {
    const promise = RA.resolveP(1);
    assert.strictEqual(
      await RA.thenCatchP(R.add(1), R.always('a'), promise),
      2
    );
    assert.strictEqual(
      await RA.thenCatchP(R.add(1), R.always('a'))(promise),
      2
    );
    assert.strictEqual(
      await RA.thenCatchP(R.add(1))(R.always('a'))(promise),
      2
    );
  });
});
