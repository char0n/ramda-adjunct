import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('delayP', function () {
  context('given number as argument', function () {
    specify(
      'should delay the resolution of the returned promise',
      async function () {
        const delayedValue = await RA.delayP(2);

        assert.isUndefined(delayedValue);
      }
    );
  });

  context('given options object as argument', function () {
    specify(
      'should delay the resolution with specific value',
      async function () {
        const delayedValue = await RA.delayP({
          timeout: 2,
          value: 'Hello there',
        });

        assert.strictEqual(delayedValue, 'Hello there');
      }
    );
  });

  context('given invalid options object', function () {
    specify(
      'should delay the resolution of the returned promise',
      async function () {
        const delayedValue = await RA.delayP({
          time: 200,
          val: 'val',
        });

        assert.isUndefined(delayedValue);
      }
    );
  });

  it('should curry', async function () {
    const delayP = RA.delayP(R.__);
    const delayedValue = await delayP(0);

    assert.isUndefined(delayedValue);
  });

  context('reject', function () {
    context('given number as argument', function () {
      specify(
        'should delay the rejection of the returned promise',
        async function () {
          try {
            await RA.delayP.reject(2);
            throw new Error('Promise should reject');
          } catch (e) {
            assert.isUndefined(e);
          }
        }
      );
    });

    context('given options object as argument', function () {
      specify(
        'should delay the rejection with specific value',
        async function () {
          try {
            await RA.delayP.reject({ timeout: 2, value: 'Hello there' });
            throw new Error('Promise should reject');
          } catch (e) {
            assert.strictEqual(e, 'Hello there');
          }
        }
      );
    });

    context('given invalid options object', function () {
      specify(
        'should delay the resolution of the returned promise',
        async function () {
          try {
            await RA.delayP.reject({
              time: 200,
              val: 1,
            });
            throw new Error('Promise should reject');
          } catch (e) {
            assert.isUndefined(e);
          }
        }
      );
    });

    specify('should curry', async function () {
      const reject = RA.delayP.reject(R.__);
      try {
        await reject(0);
        throw new Error('Promise should reject');
      } catch (e) {
        assert.isUndefined(e);
      }
    });
  });
});
