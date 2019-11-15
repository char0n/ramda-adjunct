import { assert } from 'chai';

import * as RA from '../src';

describe('list', function() {
  it('tests creating list from items', function() {
    assert.sameOrderedMembers(RA.list('a', 'b', 'c'), ['a', 'b', 'c']);
  });

  it('test creating list from another list', function() {
    assert.sameDeepOrderedMembers(RA.list(['a', 'b']), [['a', 'b']]);
  });

  it('test creating list from undefined', function() {
    assert.sameOrderedMembers(RA.list(undefined), [undefined]);
  });

  it('test creating empty list from empty items', function() {
    assert.sameOrderedMembers(RA.list(), []);
  });
});
