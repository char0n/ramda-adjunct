import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('escapeRegExp', function () {
  it('should escape RegExp in string', function () {
    assert.strictEqual(
      RA.escapeRegExp(
        '[ramda-adjunct](https://github.com/char0n/ramda-adjunct)'
      ),
      String.raw`\[ramda\-adjunct\]\(https://github\.com/char0n/ramda\-adjunct\)`
    );

    assert.strictEqual(
      RA.escapeRegExp('^$.*+?()[]{}|\\\\'),
      String.raw`\^\$\.\*\+\?\(\)\[\]\{\}\|\\\\`
    );

    assert.strictEqual(
      RA.escapeRegExp('\\ ^ $ * + ? . ( ) | { } [ ]'),
      '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
    );

    assert.strictEqual(RA.escapeRegExp('abc'), 'abc');
  });

  context('given non-string value provided', function () {
    it('should return original value', function () {
      const obj = {};

      assert.isUndefined(RA.escapeRegExp(void 0), undefined);
      assert.strictEqual(RA.escapeRegExp(obj), obj);
      assert.isNull(RA.escapeRegExp(null));
      assert.isUndefined(RA.escapeRegExp(undefined));
      assert.strictEqual(RA.escapeRegExp(17), 17);
      assert.isTrue(RA.escapeRegExp(true));
      assert.isFalse(RA.escapeRegExp(false));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const escapeRegExp = RA.escapeRegExp(R.__);

    assert.strictEqual(escapeRegExp(''), '');
  });
});
