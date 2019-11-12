import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isRegExp', function() {
  it('tests a value for `RegExp`', function() {
    assert.isTrue(RA.isRegExp(new RegExp()));
    assert.isTrue(RA.isRegExp(/(?:)/));

    assert.isFalse(RA.isRegExp('a'));
    assert.isFalse(RA.isRegExp(1));
    assert.isFalse(RA.isRegExp([]));
    assert.isFalse(RA.isRegExp({}));
    assert.isFalse(RA.isRegExp(true));
    assert.isFalse(RA.isRegExp(false));
    assert.isFalse(RA.isRegExp(new Error()));
    assert.isFalse(RA.isRegExp(new Date()));
    assert.isFalse(RA.isRegExp(function() {}));
    assert.isFalse(RA.isRegExp(Object(0)));
    assert.isFalse(RA.isRegExp(Object('a')));
    assert.isFalse(RA.isRegExp(Object(false)));
    assert.isFalse(RA.isRegExp(RA));
    assert.isFalse(RA.isRegExp(args));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isRegExp(Symbol));
    }

    assert.isFalse(RA.isRegExp(null));
    assert.isFalse(RA.isRegExp(undefined));
  });
});
