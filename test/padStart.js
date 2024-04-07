import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('padStart', function () {
  it('should pad string with spaces', function () {
    assert.strictEqual(RA.padStart(3, 'a'), '  a');
  });

  context('given targetLength as 0', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padStart(0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padStart(1, 'abc'), 'abc');
    });
  });

  context('given targetLength supplied as float', function () {
    specify('should convert targetLength to integer', function () {
      assert.strictEqual(RA.padStart(7.5, 'abc'), '    abc');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function () {
      specify('should return padded string', function () {
        assert.strictEqual(RA.padStart('5', 'abc'), '  abc');
      });
    }
  );

  context('given targeLength is a negative number', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padStart(-10, 'abc'), 'abc');
    });
  });

  it('should be curried', function () {
    assert.strictEqual(RA.padStart(5, 'abc'), '  abc');
    assert.strictEqual(RA.padStart(5)('abc'), '  abc');
  });
});
