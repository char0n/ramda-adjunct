import { assert } from 'chai';

import * as RA from '../src';

describe('delayP', function() {
  context('passing number as argument', function() {
    specify('should delay the resolution of delayed promise', async function() {
      const delayedValue = await RA.delayP(20);

      assert.isUndefined(delayedValue);
    });
  });

  context('passing object as argument', function() {
    specify('should delay the resolution of delayed promise', async function() {
      const delayedValue = await RA.delayP({
        timeout: 20,
        value: 'Hello there',
      });
      assert.deepEqual('Hello there', delayedValue);
    });
  });

  context('passing object with different properties as argument', function() {
    specify('should delay the resolution of delayed promise', async function() {
      const delayedValue = await RA.delayP({
        time: 200,
        val: 1,
      });
      assert.isUndefined(delayedValue);
    });
  });

  context('reject', function() {
    context('passing number as argument', function() {
      specify(
        'should delay the rejected of the returned promise',
        async function() {
          let delayedValue;
          try {
            delayedValue = await RA.delayP.reject(10);
            throw new Error('rejection should fail');
          } catch (e) {
            assert.isUndefined(delayedValue);
          }
        }
      );
    });

    context('passing object as argument', function() {
      specify(
        'should delay the rejected of the returned promise',
        async function() {
          const error = new Error('error');
          let delayedValue;
          try {
            delayedValue = await RA.delayP.reject({
              timeout: 9,
              value: error,
            });
            throw new Error('rejection should fail');
          } catch (e) {
            assert.strictEqual(delayedValue, undefined);
          }
        }
      );
    });
  });
});
