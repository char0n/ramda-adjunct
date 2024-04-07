import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('defaultWhen', function () {
  it('should return default value', function () {
    assert.strictEqual(RA.defaultWhen(RA.isNull, 1, null), 1);
    assert.strictEqual(RA.defaultWhen(RA.isString, 2, ''), 2);
  });

  it('should return value', function () {
    assert.isUndefined(RA.defaultWhen(RA.isNull, 1, undefined));
    assert.strictEqual(RA.defaultWhen(RA.isString, 2, 3), 3);
  });

  it('should curry', function () {
    assert.strictEqual(RA.defaultWhen(RA.isNull)(1)(null), 1);
    assert.strictEqual(RA.defaultWhen(RA.isNull, 1)(null), 1);
    assert.strictEqual(RA.defaultWhen(RA.isNull, 1, null), 1);
  });
});
