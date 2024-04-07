import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('subtractNum', function () {
  it('should subtract the first number from the second number', function () {
    assert.strictEqual(RA.subtractNum(3, 5), 2);
    assert.strictEqual(RA.subtractNum(5, 3), -2);
    assert.isNaN(RA.subtractNum(3, 'foo'));
  });

  it('should be curried', function () {
    assert.strictEqual(RA.subtractNum(3)(5), 2);
    assert.strictEqual(RA.subtractNum(3, 5), 2);
  });
});
