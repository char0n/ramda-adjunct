import { assert } from 'chai';
import * as R from 'ramda';
import * as fs from 'fs';

import * as RA from '../src';

describe('isError', function () {
  context('given an error', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isError(new Error()));
      assert.isTrue(RA.isError(new TypeError()));
      assert.isTrue(RA.isError(new RangeError()));
      assert.isTrue(RA.isError(new SyntaxError()));
      assert.isTrue(RA.isError(new ReferenceError()));
      assert.isTrue(
        RA.isError(
          (() => {
            let error;
            try {
              fs.readFileSync('non/existant/file/path.js');
            } catch (systemError) {
              error = systemError;
            }
            return error;
          })()
        )
      );
      assert.isTrue(
        RA.isError(
          (() => {
            let error;
            try {
              global.assert(1 === 2);
            } catch (assertionError) {
              error = assertionError;
            }
            return error;
          })()
        )
      );
    });
  });

  context('given a non-error value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isError('I am not an error'));
      assert.isFalse(RA.isError([1, 2, 3]));
      assert.isFalse(RA.isError(new Set([1, 2, 3])));
      assert.isFalse(RA.isError({ key: 'value' }));
      assert.isFalse(RA.isError(100));
      assert.isFalse(RA.isError(undefined));
      assert.isFalse(RA.isError(null));
      assert.isFalse(RA.isError(() => {}));
      assert.isFalse(RA.isError(Symbol.iterator));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isError = RA.isError(R.__);

    assert.isFalse(isError(1));
    assert.isTrue(isError(new Error()));
  });
});
