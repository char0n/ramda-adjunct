import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import args from './shared/arguments.js';

describe('isNotRegExp', function () {
  context('given a non-regexp value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotRegExp('a'));
      assert.isTrue(RA.isNotRegExp(1));
      assert.isTrue(RA.isNotRegExp([]));
      assert.isTrue(RA.isNotRegExp({}));
      assert.isTrue(RA.isNotRegExp(true));
      assert.isTrue(RA.isNotRegExp(false));
      assert.isTrue(RA.isNotRegExp(new Error()));
      assert.isTrue(RA.isNotRegExp(new Date()));
      assert.isTrue(RA.isNotRegExp(RA));
      assert.isTrue(RA.isNotRegExp(function () {}));
      assert.isTrue(RA.isNotRegExp(Object(0)));
      assert.isTrue(RA.isNotRegExp(Object('a')));
      assert.isTrue(RA.isNotRegExp(args));
      assert.isTrue(RA.isNotRegExp(Symbol));
      assert.isTrue(RA.isNotRegExp(null));
      assert.isTrue(RA.isNotRegExp(undefined));
    });
  });

  context('given a regexp value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotRegExp(new RegExp()));
      assert.isFalse(RA.isNotRegExp(/(?:)/));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotRegExp = RA.isNotRegExp(R.__);

    assert.isTrue(isNotRegExp(null));
  });
});
