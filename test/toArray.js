import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import { fromPonyfill } from '../src/toArray.js';

describe('toArray', function () {
  const assertIsEmptyArray = (val) => {
    assert.isArray(val);
    assert.isEmpty(val);
  };

  context('given an object', function () {
    specify('should return values', function () {
      const actual = RA.toArray({ foo: 1, bar: 2 });

      assert.sameOrderedMembers(actual, [1, 2]);
    });
  });

  context('given an iterable', function () {
    specify('should convert a map into an array of arrays', function () {
      const map = new Map();
      map.set('0', 'foo');
      map.set(1, 'bar');

      const actual = RA.toArray(map);

      assert.sameDeepOrderedMembers(actual, [
        ['0', 'foo'],
        [1, 'bar'],
      ]);
    });

    specify('should convert a set into an array', function () {
      const set = new Set([1, 2, 3]);

      const actual = RA.toArray(set);

      assert.sameOrderedMembers(actual, [1, 2, 3]);
    });

    specify('should convert an iterator into an array', function () {
      const object = { 0: 'a', length: 1 };
      object[Symbol.iterator] = Array.prototype[Symbol.iterator];

      const actual = RA.toArray(object);

      assert.sameOrderedMembers(actual, ['a']);
    });

    specify('should return shallow copy of array', function () {
      const array = [1, 2];
      const actual = RA.toArray(array);

      assert.sameOrderedMembers(actual, [1, 2]);
      assert.notStrictEqual(actual, array);
    });

    specify('should return string as array', function () {
      assert.sameOrderedMembers(RA.toArray('abc'), ['a', 'b', 'c']);
    });
  });

  context('given non object types', function () {
    specify('should return an empty array', function () {
      assertIsEmptyArray(RA.toArray(1));
      assertIsEmptyArray(RA.toArray(undefined));
      assertIsEmptyArray(RA.toArray(null));
      assertIsEmptyArray(RA.toArray(true));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const toArray = RA.toArray(R.__);

    assert.sameOrderedMembers(toArray([1, 2, 3]), [1, 2, 3]);
  });

  context('fromPonyfill', function () {
    context('given an object', function () {
      specify('should return values', function () {
        const actual = fromPonyfill({ foo: 1, bar: 2 });

        assertIsEmptyArray(actual);
      });
    });

    context('given an iterable', function () {
      specify('should convert a map into an array of arrays', function () {
        const map = new Map();
        map.set('0', 'foo');
        map.set(1, 'bar');

        const actual = fromPonyfill(map);

        assert.sameDeepOrderedMembers(actual, [
          ['0', 'foo'],
          [1, 'bar'],
        ]);
      });

      specify('should convert a set into an array', function () {
        const set = new Set([1, 2, 3]);

        const actual = fromPonyfill(set);

        assert.sameOrderedMembers(actual, [1, 2, 3]);
      });

      specify('should convert an iterator into an array', function () {
        const object = { 0: 'a', length: 1 };
        object[Symbol.iterator] = Array.prototype[Symbol.iterator];

        const actual = fromPonyfill(object);

        assert.sameOrderedMembers(actual, ['a']);
      });

      specify('should return shallow copy of array', function () {
        const array = [1, 2];
        const actual = fromPonyfill(array);

        assert.sameOrderedMembers(actual, [1, 2]);
        assert.notStrictEqual(actual, array);
      });

      specify('should return string as array', function () {
        assert.sameOrderedMembers(fromPonyfill('abc'), ['a', 'b', 'c']);
      });
    });

    context('given non object types', function () {
      specify('should return an empty array', function () {
        assertIsEmptyArray(RA.toArray(1));
        assertIsEmptyArray(RA.toArray(undefined));
        assertIsEmptyArray(RA.toArray(null));
        assertIsEmptyArray(RA.toArray(true));
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const toArrayPonyfill = fromPonyfill(R.__);

      assert.sameOrderedMembers(toArrayPonyfill([1, 2, 3]), [1, 2, 3]);
    });
  });
});
