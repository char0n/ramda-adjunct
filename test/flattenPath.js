import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('flattenPath', function () {
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
    specify(
      'should return object with identical structure as provided object',
      function () {
        obj = {
          a: 1,
          b1: { b2: 999 },
        };
        assert.deepEqual(RA.flattenPath(path, obj), obj);
      }
    );
  });

  context("given path doesn't exist", function () {
    specify(
      'should return object with identical structure as provided object',
      function () {
        assert.deepEqual(RA.flattenPath(['does', 'not', 'exist'], obj), obj);
      }
    );
  });

  it('should curry', function () {
    assert.deepEqual(RA.flattenPath([], {}), {});
    assert.deepEqual(RA.flattenPath([])({}), {});
  });
});
