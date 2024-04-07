import { assert } from 'chai';
import { view, set, over, assoc, replace } from 'ramda';

import * as RA from '../src/index.js';

describe('lensIso', function () {
  const lensJSON = RA.lensIso(JSON.parse, JSON.stringify);

  context('given isomorphism', function () {
    specify('should read through lens', function () {
      assert.deepEqual(view(lensJSON, '{"a":1}'), { a: 1 });
    });

    specify('should write through lens', function () {
      assert.strictEqual(set(lensJSON, { b: 2 }, '{"a": 1}'), '{"b":2}');
    });

    specify('should apply a function over lens', function () {
      assert.strictEqual(
        over(lensJSON, assoc('b', 2), '{"a":1}'),
        '{"a":1,"b":2}'
      );
    });
  });

  context('given reversed isomorphism', function () {
    const lensJSONReversed = RA.lensIso.from(lensJSON);

    specify('should read through lens', function () {
      assert.strictEqual(view(lensJSONReversed, { a: 1 }), '{"a":1}');
    });

    specify('should write through lens', function () {
      assert.deepEqual(set(lensJSONReversed, '{"b":2}', { a: 1 }), { b: 2 });
    });

    specify('should apply a function over lens', function () {
      assert.deepEqual(
        over(lensJSONReversed, replace('}', ',"b":2}'), { a: 1 }),
        {
          a: 1,
          b: 2,
        }
      );
    });
  });

  it('should contain `from` property', function () {
    assert.isTrue(RA.isFunction(RA.lensIso.from));
  });

  it('should be curried', function () {
    const lensJSONA1 = RA.lensIso(JSON.parse)(JSON.stringify);

    assert.deepEqual(view(lensJSONA1, '{"a":1}'), { a: 1 });
    assert.deepEqual(view(lensJSON, '{"a":1}'), { a: 1 });
  });
});
