import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('list', function () {
  it('should create list from items', function () {
    assert.sameOrderedMembers(RA.list('a', 'b', 'c'), ['a', 'b', 'c']);
  });

  it('should create list from another list', function () {
    assert.sameDeepOrderedMembers(RA.list(['a', 'b']), [['a', 'b']]);
  });

  it('should create list from undefined', function () {
    assert.sameOrderedMembers(RA.list(undefined), [undefined]);
  });

  it('should create empty list from empty items', function () {
    assert.sameOrderedMembers(RA.list(), []);
  });
});
