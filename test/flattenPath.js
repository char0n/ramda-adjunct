import RA from '../src/index';
import eq from './shared/eq';


describe('flattenPath', function() {
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
    eq(RA.flattenPath([], {}), {});
    eq(RA.flattenPath([])({}), {});
  });

  context('when path leads to non object', function () {
    specify('should return object with identical structure as provided object', function () {
      obj = {
        a: 1,
        b1: { b2: 999 },
      };
      eq(RA.flattenPath(path, obj), obj);
    });
  });

  context("when path doesn't exist", function () {
    specify('should return object with identical structure as provided object', function () {
      eq(RA.flattenPath(['does', 'not', 'exist'], obj), obj);
    });
  });
});
