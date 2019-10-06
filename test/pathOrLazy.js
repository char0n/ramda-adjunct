import sinon from 'sinon';

import * as RA from '../src';
import eq from './shared/eq';

describe('pathOrLazy', function() {
  const obj = {
    a: { b: { c: 1, d: ['x', 'y', 'z'] } },
    e: NaN,
    f: null,
    g: undefined,
  };

  context('given requested path exists', function() {
    specify('should return value at path', function() {
      eq(RA.pathOrLazy(() => {}, ['a', 'b', 'c'], obj), 1);
    });

    specify('should not invoke lazy function', function() {
      const fn = sinon.spy();
      RA.pathOrLazy(fn, ['a', 'b', 'c'], obj);
      eq(fn.notCalled, true);
    });
  });

  context('given requested path does not exist', function() {
    context('and the value is missing', function() {
      specify('should return default value', function() {
        eq(RA.pathOrLazy(() => 7, ['nonexistent'], obj), 7);
      });
    });

    context('and the value is NaN', function() {
      specify('should return default value', function() {
        eq(RA.pathOrLazy(() => 7, ['e'], obj), 7);
      });
    });

    context('and the value is null', function() {
      specify('should return default value', function() {
        eq(RA.pathOrLazy(() => 7, ['f'], obj), 7);
      });
    });

    context('and the value is undefined', function() {
      specify('should return default value', function() {
        eq(RA.pathOrLazy(() => 7, ['g'], obj), 7);
      });
    });

    specify('should pass object to lazy function as only argument', function() {
      const fn = sinon.spy();
      RA.pathOrLazy(fn, ['nonexistent'], obj);
      eq(fn.calledOnceWithExactly(obj), true);
    });
  });

  it('should curry', function() {
    const fn = () => 7;
    eq(RA.pathOrLazy(fn, ['a', 'b', 'd', 1], obj), 'y');
    eq(RA.pathOrLazy(fn)(['a', 'b', 'd', 1], obj), 'y');
    eq(RA.pathOrLazy(fn, ['a', 'b', 'd', 1])(obj), 'y');
    eq(RA.pathOrLazy(fn)(['a', 'b', 'd', 1])(obj), 'y');
  });
});
