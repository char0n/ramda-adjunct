import { assert } from 'chai';

import * as RA from '../src';

describe('replaceAll', function() {
  it('should replace all matches', function() {
    const value = 'ab cd ab cd ab cd';
    const actual = RA.replaceAll('ab', 'ef', value);
    const expected = 'ef cd ef cd ef cd';

    assert.strictEqual(actual, expected);
  });

  context('given searchValue is RegExp', function() {
    specify('should throw Error', function() {
      assert.throws(() => RA.replaceAll(/a/g, 'c', 'abc'));
    });
  });

  context('given empty string', function() {
    specify('should return original value', function() {
      assert.strictEqual(RA.replaceAll('a', 'c', ''), '');
    });
  });

  it('should support boxing wrappers', function() {
    const value = new String('ab cd ab cd ab cd');
    const searchValue = new String('ab');
    const replaceValue = new String('ef');
    const actual = RA.replaceAll(searchValue, replaceValue, value);
    const expected = 'ef cd ef cd ef cd';

    assert.strictEqual(actual, expected);
  });

  it('should replace in very big strings', function() {
    const bigString = 'ab cd'.repeat(10000);
    const expected = 'ab ef'.repeat(10000);
    const actual = RA.replaceAll('cd', 'ef', bigString);

    assert.strictEqual(actual, expected);
  });

  it('should curry', function() {
    assert.strictEqual(RA.replaceAll('a', 'c', 'aba'), 'cbc');
    assert.strictEqual(RA.replaceAll('a')('c', 'aba'), 'cbc');
    assert.strictEqual(RA.replaceAll('a', 'c')('aba'), 'cbc');
    assert.strictEqual(RA.replaceAll('a')('c')('aba'), 'cbc');
  });
});
