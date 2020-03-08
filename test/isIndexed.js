import { assert } from 'chai';

import * as RA from '../src';

describe('isIndexed', function() {
  context('given a `String` value', function() {
    specify('should return true', function() {
      assert.isTrue(RA.isIndexed('test'));
      assert.isTrue(RA.isIndexed(Object('test')));
    });
  });

  context('given array value', function() {
    specify('should return true', function() {
      assert.isTrue(RA.isIndexed([1, 2]));
    });
  });

  context('given a non `String` or `Array` value', function() {
    specify('should return false', function() {
      assert.isFalse(RA.isIndexed(true));
      assert.isFalse(RA.isIndexed(new Date()));
      assert.isFalse(RA.isIndexed(new Error()));
      assert.isFalse(RA.isIndexed({ 0: 1, length: 1 }));
      assert.isFalse(RA.isIndexed(1));
    });
  });
});
