import { assert } from 'chai';

import * as RA from '../src';

describe('toUinteger32', function () {
  it('should convert value to an unsigned integer', function () {
    assert.strictEqual(RA.toUinteger32(123.456), 123);
    assert.strictEqual(RA.toUinteger32(123), 123);
    assert.strictEqual(RA.toUinteger32(0), 0);
    assert.strictEqual(RA.toUinteger32(-1), 4294967295);
    assert.strictEqual(RA.toUinteger32(-1.5), 4294967295);
  });
});
