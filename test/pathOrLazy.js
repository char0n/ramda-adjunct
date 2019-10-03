import sinon from 'sinon';

import * as RA from '../src';
import eq from './shared/eq';

describe('pathOrLazy', function() {
  const obj = { a: { b: { c: 1, d: ['x', 'y', 'z'] } } };

  it('returns value for requested path', function() {
    eq(RA.pathOrLazy(() => {}, ['a', 'b', 'c'], obj), 1);
  });

  it('returns default value when requested path does not exist', function() {
    eq(RA.pathOrLazy(() => 7, ['nonexistent'], obj), 7);
  });

  it('does not pass args to lazy function', function() {
    const fn = sinon.spy();
    RA.pathOrLazy(fn, ['nonexistent'], obj);
    eq(fn.calledOnceWithExactly(), true);
  });

  it('does not invoke lazy function if path exists', function() {
    const fn = sinon.spy();
    RA.pathOrLazy(fn, ['a', 'b', 'c'], obj);
    eq(fn.notCalled, true);
  });

  it('should curry', function() {
    const fn = () => 7;
    eq(RA.pathOrLazy(fn, ['a', 'b', 'd', 1], obj), 'y');
    eq(RA.pathOrLazy(fn)(['a', 'b', 'd', 1], obj), 'y');
    eq(RA.pathOrLazy(fn, ['a', 'b', 'd', 1])(obj), 'y');
    eq(RA.pathOrLazy(fn)(['a', 'b', 'd', 1])(obj), 'y');
  });
});
