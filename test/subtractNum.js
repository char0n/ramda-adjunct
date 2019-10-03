import * as RA from '../src';
import eq from './shared/eq';

describe('subtractNum', function() {
  it('should subtract the first number from the second number', function() {
    eq(RA.subtractNum(3, 5), 2);
    eq(RA.subtractNum(5, 3), -2);
    eq(RA.subtractNum(3, 'foo'), NaN);
  });

  it('should curry', function() {
    eq(RA.subtractNum(3)(5), 2);
    eq(RA.subtractNum(3, 5), 2);
  });
});
