import { assert } from 'chai';
import { NEL, Nil } from 'monet';

import { concatAll } from '../src';
import eq from './shared/eq';

describe('concatAll', function() {
  it('should concatenate arrays', function() {
    eq(concatAll([[1], [2], [3]]), [1, 2, 3]);
  });

  it('should concatenate strings', function() {
    eq(concatAll(['1', '2', '3']), '123');
  });

  it('should concatenate semigroups', function() {
    eq(concatAll([NEL(1), NEL(2)]), NEL(1, NEL(2, Nil)));
  });

  it('should returns null if empty foldable was passed', function() {
    eq(concatAll([]), null);
  });

  it('should throw if non-foldable is passed', function() {
    assert.throws(() => concatAll(null), TypeError);
  });

  it('should throw if foldable contains non-semigroups', function() {
    assert.throws(() => concatAll([1, 2, null, true]), TypeError);
  });

  it('should throw if foldable contains non-compatible semigroups', function() {
    assert.throws(() => concatAll(['1', [1]]), TypeError);
  });
});
