import * as RA from '../src/index';
import eq from './shared/eq';


describe('spreadPath', function () {
  let path;
  let obj;

  beforeEach(function () {
    path = ['b1', 'b2'];
    obj = {
      a: 1,
      b1: { b2: { c: 3, d: 4 } },
    };
  });

  it('tests currying', function () {
    const expected = { a: 1, c: 3, d: 4, b1: {} };

    eq(RA.spreadPath(path, obj), expected);
    eq(RA.spreadPath(path)(obj), expected);
  });

  context('when path leads to non object', function () {
    specify('should return object without path', function () {
      obj = {
        a: 1,
        b1: { b2: 999 },
      };
      eq(RA.spreadPath(path, obj), { a: 1, b1: {} });
    });
  });

  context("when path doesn't exist", function () {
    specify('should return object with identical structure as provided object', function () {
      eq(RA.spreadPath(['does', 'not', 'exist'], obj), obj);
    });
  });
});
