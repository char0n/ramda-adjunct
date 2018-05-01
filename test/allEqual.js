import { assert } from 'chai';

import * as RA from '../src/index';

describe('allEqual', function() {
  it('returns true when all items are equal', function() {
    assert.equal(RA.allEqual([4, 4, 4, 4]), true);
  });
  it('returns true when all items are deeply equal', function() {
    assert.equal(RA.allEqual([{ key: 'foo' }, { key: 'foo' }]), true);
  });
  it('returns false when items are not equal', function() {
    assert.equal(RA.allEqual([1, 1, 2, 1, 1]), false);
  });
});
