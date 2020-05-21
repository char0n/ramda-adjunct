import { assert } from 'chai';

import * as RA from '../src';

describe('filterIndexed', function () {
  context('given documentation example', function () {
    specify(
      'should return an array of the value at a given index',
      function () {
        assert.deepEqual(
          RA.filterIndexed((v, idx) => idx === 0, [1, 2, 3]),
          [1]
        );
      }
    );
  });

  context('given an empty array as input', function () {
    specify('should return an empty array', function () {
      assert.deepEqual(
        RA.filterIndexed((v, idx) => idx === 0, []),
        []
      );
    });
  });
});
