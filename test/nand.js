import eq from './shared/eq';
import * as RA from '../src';

describe('RA.nand', function() {
  it('should work on booleans', function() {
    eq(RA.nand(true, true), false);
    eq(RA.nand(false, true), true);
    eq(RA.nand(true, false), true);
    eq(RA.nand(false, false), true);
  });

  it('should work on numbers', function() {
    eq(RA.nand(1.0, 1.0), false);
    eq(RA.nand(0.0, 1.0), true);
    eq(RA.nand(1.0, 0.0), true);
    eq(RA.nand(0.0, 0.0), true);
  });

  it('should work on a combination of things', function() {
    eq(RA.nand(true, 1.0), false);
    eq(RA.nand(null, true), true);
    eq(RA.nand(1.0, undefined), true);
    eq(RA.nand(0.0, false), true);
    eq(RA.nand(null, null), true);
    eq(RA.nand(null, undefined), true);
  });

  it('should support currying', function() {
    eq(RA.nand(true, true), false);
    eq(RA.nand(true)(true), false);
    eq(RA.nand(false, true), true);
    eq(RA.nand(false)(true), true);
    eq(RA.nand(true, false), true);
    eq(RA.nand(true)(false), true);
    eq(RA.nand(false, false), true);
    eq(RA.nand(false)(false), true);
  });
});
