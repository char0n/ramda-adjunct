import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotRegExp', function() {
  it('tests a value for complement of `RegExp`', function() {
    assert.isTrue(RA.isNotRegExp('a'));
    assert.isTrue(RA.isNotRegExp(1));
    assert.isTrue(RA.isNotRegExp([]));
    assert.isTrue(RA.isNotRegExp({}));
    assert.isTrue(RA.isNotRegExp(true));
    assert.isTrue(RA.isNotRegExp(false));
    assert.isTrue(RA.isNotRegExp(new Error()));
    assert.isTrue(RA.isNotRegExp(new Date()));
    assert.isTrue(RA.isNotRegExp(RA));
    assert.isTrue(RA.isNotRegExp(function() {}));
    assert.isTrue(RA.isNotRegExp(Object(0)));
    assert.isTrue(RA.isNotRegExp(Object('a')));
    assert.isTrue(RA.isNotRegExp(args));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isNotRegExp(Symbol));
    }

    assert.isTrue(RA.isNotRegExp(null));
    assert.isTrue(RA.isNotRegExp(undefined));

    assert.isFalse(RA.isNotRegExp(new RegExp()));
    assert.isFalse(RA.isNotRegExp(/(?:)/));
  });
});
