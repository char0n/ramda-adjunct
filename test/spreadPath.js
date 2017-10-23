import RA from '../src/index';
import eq from './shared/eq';


describe('spreadPath', function() {
  it('tests currying', function () {
    const path = ['b1', 'b2'];
    const obj = {
      a: 1,
      b1: { b2: { c: 3, d: 4 } },
    };
    const expected = {
      a: 1,
      c: 3,
      d: 4,
    };

    eq(RA.spreadPath(path, obj), expected);
    eq(RA.spreadPath(path)(obj), expected);
  });

  it('returns object without path when path leads to not object', function () {
    const path = ['b1', 'b2'];
    const obj = {
      a: 1,
      b1: { b2: 999 },
    };
    const expected = {
      a: 1,
    };

    eq(RA.spreadPath(path, obj), expected);
  });

  it('returns unmodified object when path is empty', function () {
    const path = [];
    const obj = {
      a: 1,
      b1: { b2: { c: 3, d: 4 } },
    };
    const expected = obj;

    eq(RA.spreadPath(path, obj), expected);
  });
});
