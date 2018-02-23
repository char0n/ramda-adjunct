import { assert } from 'chai';

import { concatAll } from '../src';
import eq from './shared/eq';

describe('concatAll', function() {
  it('concatenates arrays', function() {
    eq(concatAll([[1], [2], [3]]), [1, 2, 3]);
  });

  it('concatenates strings', function() {
    eq(concatAll(['1', '2', '3']), '123');
  });

  it('returns null if empty foldable was passed', function() {
    eq(concatAll([]), null);
  });

  it('throws if non-foldable is passed', function() {
    assert.throws(() => concatAll(null), TypeError);
  });

  it('throws if foldable contains non-semigroups', function() {
    assert.throws(() => concatAll([1, 2, null, true]), TypeError);
  });

  it('throws if foldable contains non-compatible semigroups', function() {
    assert.throws(() => concatAll(['1', [1]]), TypeError);
  });
});
