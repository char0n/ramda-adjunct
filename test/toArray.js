import { assert } from 'chai';

import * as RA from '../src';
import { fromPolyfill } from '../src/toArray';

describe('toArray', function() {
  context('given an object', function() {
    specify('should return values', function() {
      const actual = RA.toArray({ foo: 1, bar: 2 });

      assert.sameOrderedMembers(actual, [1, 2]);
    });
  });

  context('given an iterable', function() {
    specify('should convert a map into an array of arrays', function() {
      const map = new Map();
      map.set('0', 'foo');
      map.set(1, 'bar');

      const actual = RA.toArray(map);

      assert.sameDeepOrderedMembers(actual, [['0', 'foo'], [1, 'bar']]);
    });

    specify('should convert a set into an array', function() {
      const set = new Set([1, 2, 3]);

      const actual = RA.toArray(set);

      assert.sameOrderedMembers(actual, [1, 2, 3]);
    });

    specify('should convert an iterator into an array', function() {
      const object = { '0': 'a', length: 1 };
      object[Symbol.iterator] = Array.prototype[Symbol.iterator];

      const actual = RA.toArray(object);

      assert.sameOrderedMembers(actual, ['a']);
    });

    specify('should return shallow copy of array', function() {
      const array = [1, 2];
      const actual = RA.toArray(array);

      assert.sameOrderedMembers(actual, [1, 2]);
      assert.notEqual(actual, array);
    });
  });

  context('given non object types', function() {
    specify('should return an empty array', function() {
      assert.isArray(RA.toArray(1));
      assert.isArray(RA.toArray(undefined));
      assert.isArray(RA.toArray(null));
      assert.isArray(RA.toArray(true));
    });
  });

  context('fromPolyfill', function() {
    specify('should return a shallow copy of array', function() {
      const array = [1, 2];
      const actual = fromPolyfill(array);

      assert.sameOrderedMembers(actual, [1, 2]);
      assert.notEqual(actual, array);
    });

    specify('should throw error if null of undefined', function() {
      const error =
        'Array.from: when provided, the second argument must be a function';
      assert.throws(() => fromPolyfill(null), error);
      assert.throws(() => fromPolyfill(undefined), error);
    });

    specify('should return an empty array', function() {
      assert.sameOrderedMembers(fromPolyfill(1), []);
      assert.sameOrderedMembers(fromPolyfill(false), []);
      assert.sameOrderedMembers(fromPolyfill(x => x + 1), []);
      assert.sameOrderedMembers(fromPolyfill({ a: 1 }), []);
    });

    specify('should convert a map into an array of arrays', function() {
      const map = new Map();
      map.set('0', 'foo');
      map.set(1, 'bar');

      const actual = fromPolyfill(map);

      assert.sameDeepOrderedMembers(actual, [['0', 'foo'], [1, 'bar']]);
    });

    specify('should convert a set into an array', function() {
      const set = new Set([1, 2, 3]);

      const actual = fromPolyfill(set);

      assert.sameOrderedMembers(actual, [1, 2, 3]);
    });

    specify('should call map function', function() {
      const actual = fromPolyfill([1, 2, 3], x => x + 1);

      assert.sameOrderedMembers(actual, [2, 3, 4]);
    });
  });
});
