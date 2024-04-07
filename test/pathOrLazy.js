import { assert } from 'chai';
import sinon from 'sinon';

import * as RA from '../src/index.js';

describe('pathOrLazy', function () {
  const obj = {
    a: { b: { c: 1, d: ['x', 'y', 'z'] } },
    e: NaN,
    f: null,
    g: undefined,
  };

  context('given requested path exists', function () {
    specify('should return value at path', function () {
      assert.strictEqual(
        RA.pathOrLazy(() => {}, ['a', 'b', 'c'], obj),
        1
      );
    });

    specify('should not invoke lazy function', function () {
      const fn = sinon.spy();
      RA.pathOrLazy(fn, ['a', 'b', 'c'], obj);
      assert.isTrue(fn.notCalled);
    });
  });

  context('given requested path does not exist', function () {
    context('and the value is missing', function () {
      specify('should return default value', function () {
        assert.strictEqual(
          RA.pathOrLazy(() => 7, ['nonexistent'], obj),
          7
        );
      });
    });

    context('and the value is NaN', function () {
      specify('should return default value', function () {
        assert.strictEqual(
          RA.pathOrLazy(() => 7, ['e'], obj),
          7
        );
      });
    });

    context('and the value is null', function () {
      specify('should return default value', function () {
        assert.strictEqual(
          RA.pathOrLazy(() => 7, ['f'], obj),
          7
        );
      });
    });

    context('and the value is undefined', function () {
      specify('should return default value', function () {
        assert.strictEqual(
          RA.pathOrLazy(() => 7, ['g'], obj),
          7
        );
      });
    });

    specify(
      'should pass object to lazy function as only argument',
      function () {
        const fn = sinon.spy();
        RA.pathOrLazy(fn, ['nonexistent'], obj);
        assert.isTrue(fn.calledOnceWithExactly(obj));
      }
    );
  });

  it('should be curried', function () {
    const fn = () => 7;
    assert.strictEqual(RA.pathOrLazy(fn, ['a', 'b', 'd', 1], obj), 'y');
    assert.strictEqual(RA.pathOrLazy(fn)(['a', 'b', 'd', 1], obj), 'y');
    assert.strictEqual(RA.pathOrLazy(fn, ['a', 'b', 'd', 1])(obj), 'y');
    assert.strictEqual(RA.pathOrLazy(fn)(['a', 'b', 'd', 1])(obj), 'y');
  });
});
