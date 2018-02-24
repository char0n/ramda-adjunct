import * as RA from '../src';
import eq from './shared/eq';

describe('updateSlice', function() {
  it('should work on strings', function() {
    eq(RA.updateSlice(1, 3, 'DDDD', 'ABBCCC'), 'ADDDDCCC');
  });

  it('should work on arrays', function() {
    eq(
      RA.updateSlice(1, 3, Array.from('DDDD'), Array.from('ABBCCC')),
      Array.from('ADDDDCCC')
    );
  });

  it('should support negative indexes', function() {
    eq(RA.updateSlice(-5, -3, 'DDDD', 'ABBCCC'), 'ADDDDCCC');
  });
});
