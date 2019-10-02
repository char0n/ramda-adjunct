import * as RA from '../src';
import eq from './shared/eq';

describe('subtractValue', function() {
  it('should subtract the first number from the second number', function() {
    eq(RA.subtractValue(3, 5), 2);
    eq(RA.subtractValue(5, 3), -2);
    eq(RA.subtractValue(3, 'foo'), NaN);
  });

  it('should curry', function() {
    eq(RA.subtractValue(3)(5), 2);
    eq(RA.subtractValue(5)(3), -2);
    eq(RA.subtractValue(3)('foo'), NaN);
  });
});
