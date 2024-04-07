import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('dropArgs', function () {
  let fn;
  let zeroArityFn;

  beforeEach(function () {
    fn = (a = 1, b = 2) => a + b;
    zeroArityFn = RA.dropArgs(fn);
  });

  it('should drop all arguments', function () {
    const actual = zeroArityFn('ignore1', 'ignore2');
    const expected = 3;

    assert.strictEqual(actual, expected);
  });

  it('should support placeholder to specify "gaps"', function () {
    const dropArgs = RA.dropArgs(R.__);

    assert.strictEqual(dropArgs(fn)('ignore1', 'ignore2'), 3);
  });
});
