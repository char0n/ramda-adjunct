import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('trimCharsEnd', function () {
  it('should remove all occurences of a trim character', function () {
    assert.strictEqual(RA.trimCharsEnd('-', 'abc---'), 'abc');
  });

  it('should remove all occurences of all trim characters', function () {
    assert.strictEqual(RA.trimCharsEnd('_-', 'abc-_-'), 'abc');
  });

  it('should not remove the trim characters from the beginning of the string', function () {
    assert.strictEqual(RA.trimCharsEnd('_-', '-_-abc-_-'), '-_-abc');
  });

  context('given none of the trim characters are present', function () {
    specify('should return the target string as-is', function () {
      assert.strictEqual(RA.trimCharsEnd('_-', 'abc'), 'abc');
    });
  });

  context(
    'given the target string consists entirely of trim characters',
    function () {
      specify('should return an empty string', function () {
        assert.strictEqual(RA.trimCharsEnd('_-', '-_-_-_'), '');
      });
    }
  );

  context('given an empty string for the trim characters', function () {
    specify('should return the target string as-is', function () {
      assert.strictEqual(RA.trimCharsEnd('', 'abc'), 'abc');
    });
  });

  context('given an empty string for the target string', function () {
    specify('should return an empty string', function () {
      assert.strictEqual(RA.trimCharsEnd('-_', ''), '');
    });
  });

  it('should be curried', function () {
    assert.strictEqual(RA.trimCharsEnd('_-', ''), '');
    assert.strictEqual(RA.trimCharsEnd('_-')(''), '');
  });
});
