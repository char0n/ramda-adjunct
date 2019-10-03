import * as RA from '../src';
import eq from './shared/eq';

describe('divideNum', function() {
  it('should divide the second number by the first number', function() {
    eq(RA.divideNum(2, 1), 0.5);
    eq(RA.divideNum(2.0, 1.0), 0.5);
    eq(RA.divideNum(0, 2.0), Infinity);
    eq(RA.divideNum(0.0, 2.0), Infinity);
    eq(RA.divideNum(-0.0, 2.0), -Infinity);
  });

  it('should curry', function() {
    eq(RA.divideNum(2)(1), 0.5);
    eq(RA.divideNum(2, 1), 0.5);
  });
});
