import { assert } from 'chai';

import * as RA from '../src';

describe('list', function() {
  it('creates list from items', function() {
    assert.sameOrderedMembers(RA.list('a', 'b', 'c'), ['a', 'b', 'c']);
  });

  it('creates list from another list', function() {
    assert.sameDeepOrderedMembers(RA.list(['a', 'b']), [['a', 'b']]);
  });

  it('creates list from undefined', function() {
    assert.sameOrderedMembers(RA.list(undefined), [undefined]);
  });

  it('creates empty list from empty items', function() {
    assert.sameOrderedMembers(RA.list(), []);
  });
});
