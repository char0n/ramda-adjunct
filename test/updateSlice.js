import * as RA from '../src';
import eq from './shared/eq';

describe('updateSlice', function() {
  it('should work on strings', function() {
    eq(RA.updateSlice(1, 3, 'DDDD', 'ABBCCC'), 'ADDDDCCC');
  });

  it('should work on arrays', function() {
    eq(RA.updateSlice(1, 3, [4, 4, 4, 4], [1, 2, 2, 3]), [1, 4, 4, 4, 4, 3]);
  });

  it('should support negative indexes', function() {
    eq(RA.updateSlice(-5, -3, 'DDDD', 'ABBCCC'), 'ADDDDCCC');
  });

  it('is curried', function() {
    eq(RA.updateSlice(1, 3, 'DDDD')('ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1, 3)('DDDD', 'ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1, 3)('DDDD')('ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1)(3, 'DDDD', 'ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1)(3, 'DDDD')('ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1)(3)('DDDD', 'ABBCCC'), 'ADDDDCCC');
    eq(RA.updateSlice(1)(3)('DDDD')('ABBCCC'), 'ADDDDCCC');
  });
});
