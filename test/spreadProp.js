import RA from '../src/index';
import eq from './shared/eq';


describe('spreadProp', function() {
  it('tests currying', function () {
    const prop = 'b';
    const obj = {
      a: 1,
      b: { c: 3, d: 4 },
    };
    const expected = {
      a: 1,
      c: 3,
      d: 4,
    };

    eq(RA.spreadProp(prop, obj), expected);
    eq(RA.spreadProp(prop)(obj), expected);
  });

  it('returns object without prop when prop leads to not object', function () {
    const prop = 'b';
    const obj = {
      a: 1,
      b: 999,
    };
    const expected = {
      a: 1,
    };

    eq(RA.spreadProp(prop, obj), expected);
  });
});
