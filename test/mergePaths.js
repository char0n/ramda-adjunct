import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('mergePaths', function () {
  let obj;
  let expected;

  beforeEach(function () {
    obj = {
      foo: { fooinner: { fooinner2: 1 } },
      bar: { barinner: 2 },
    };
    expected = { fooinner2: 1, barinner: 2 };
  });

  it('should merge the property paths containing object', function () {
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']], obj),
      expected
    );
  });

  it('should merge the property paths containing non-objects', function () {
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']], {
        foo: { fooinner: 1 },
        bar: 2,
      }),
      {}
    );
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']], {
        foo: { fooinner: 'a' },
        bar: 'b',
      }),
      {
        0: 'b',
      }
    );
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']], {
        foo: { fooinner: null },
        bar: undefined,
      }),
      {}
    );
  });

  it('should return an empty object if no paths requested', function () {
    assert.deepEqual(RA.mergePaths([], obj), {});
  });

  it('should be curried', function () {
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']], obj),
      expected
    );
    assert.deepEqual(
      RA.mergePaths([['foo', 'fooinner'], ['bar']])(obj),
      expected
    );
  });
});
