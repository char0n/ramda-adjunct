import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('spreadPath', function () {
  let path;
  let obj;

  beforeEach(function () {
    path = ['b1', 'b2'];
    obj = {
      a: 1,
      b1: { b2: { c: 3, d: 4 } },
    };
  });

  context('given path leads to non object', function () {
    specify('should return object without path', function () {
      obj = {
        a: 1,
        b1: { b2: 999 },
      };
      assert.deepEqual(RA.spreadPath(path, obj), { a: 1, b1: {} });
    });
  });

  context("given path doesn't exist", function () {
    specify(
      'should return object with identical structure as provided object',
      function () {
        assert.deepEqual(RA.spreadPath(['does', 'not', 'exist'], obj), obj);
      }
    );
  });

  it('should be curried', function () {
    const expected = { a: 1, c: 3, d: 4, b1: {} };

    assert.deepEqual(RA.spreadPath(path, obj), expected);
    assert.deepEqual(RA.spreadPath(path)(obj), expected);
  });
});
