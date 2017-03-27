import RA from '../src/index';
import eq from './shared/eq';

describe('isNilOrEmpty', function() {
  it('tests a value for `null` or `undefined`', function() {
    eq(RA.isNilOrEmpty(void 0), true);
    eq(RA.isNilOrEmpty(null), true);
    eq(RA.isNilOrEmpty([]), true);
    eq(RA.isNilOrEmpty({}), true);
    eq(RA.isNilOrEmpty(0), false);
    eq(RA.isNilOrEmpty(''), true);
  });

  it('returns true for null', function() {
    eq(RA.isNilOrEmpty(null), true);
  });

  it('returns true for undefined', function() {
    eq(RA.isNilOrEmpty(undefined), true);
  });

  it('returns true for empty string', function() {
    eq(RA.isNilOrEmpty(''), true);
    eq(RA.isNilOrEmpty(' '), false);
  });

  it('returns true for empty array', function() {
    eq(RA.isNilOrEmpty([]), true);
    eq(RA.isNilOrEmpty([[]]), false);
  });

  it('returns true for empty object', function() {
    eq(RA.isNilOrEmpty({}), true);
    eq(RA.isNilOrEmpty({ x: 0 }), false);
  });

  it('returns true for empty arguments object', function() {
    eq(RA.isNilOrEmpty((function() { return arguments })()), true);
    eq(RA.isNilOrEmpty((function() { return arguments })(0)), false);
  });

  it('returns false for every other value', function() {
    eq(RA.isNilOrEmpty(0), false);
    eq(RA.isNilOrEmpty(NaN), false);
    eq(RA.isNilOrEmpty(['']), false);
  });
});
