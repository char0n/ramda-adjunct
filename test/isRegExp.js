import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isRegExp', function () {
  context('given a `RegExp` value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isRegExp(new RegExp()));
      assert.isTrue(RA.isRegExp(/(?:)/));
    });
  });

  context('given a non `RegExp` value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isRegExp('a'));
      assert.isFalse(RA.isRegExp(1));
      assert.isFalse(RA.isRegExp([]));
      assert.isFalse(RA.isRegExp({}));
      assert.isFalse(RA.isRegExp(true));
      assert.isFalse(RA.isRegExp(false));
      assert.isFalse(RA.isRegExp(new Error()));
      assert.isFalse(RA.isRegExp(new Date()));
      assert.isFalse(RA.isRegExp(function () {}));
      assert.isFalse(RA.isRegExp(Object(0)));
      assert.isFalse(RA.isRegExp(Object('a')));
      assert.isFalse(RA.isRegExp(Object(false)));
      assert.isFalse(RA.isRegExp(RA));
      assert.isFalse(RA.isRegExp(args));
      assert.isFalse(RA.isRegExp(Symbol));
      assert.isFalse(RA.isRegExp(null));
      assert.isFalse(RA.isRegExp(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isRegExp = RA.isRegExp(R.__);

    assert.isFalse(isRegExp(1));
  });
});
