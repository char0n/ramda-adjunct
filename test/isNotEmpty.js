import * as RA from '../src/index';
import eq from './shared/eq';

describe('isNotEmpty', function () {
  it('returns true for null', function () {
    eq(RA.isNotEmpty(null), true);
  });

  it('returns true for undefined', function () {
    eq(RA.isNotEmpty(undefined), true);
  });

  it('returns false for empty string', function () {
    eq(RA.isNotEmpty(''), false);
    eq(RA.isNotEmpty(' '), true);
  });

  it('returns false for empty array', function () {
    eq(RA.isNotEmpty([]), false);
    eq(RA.isNotEmpty([[]]), true);
  });

  it('returns false for empty object', function () {
    eq(RA.isNotEmpty({}), false);
    eq(RA.isNotEmpty({ x: 0 }), true);
  });

  it('returns false for empty arguments object', function () {
    eq(RA.isNotEmpty((function () { return arguments })()), false);
    eq(RA.isNotEmpty((function () { return arguments })(0)), true);
  });

  it('returns true for every other value', function () {
    eq(RA.isNotEmpty(0), true);
    eq(RA.isNotEmpty(NaN), true);
    eq(RA.isNotEmpty(['']), true);
  });
});
