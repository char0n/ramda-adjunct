import * as R from 'ramda';
import { assert } from 'chai';
import { Maybe } from 'monet';

import * as RA from '../src/index.js';
import Identity from '../src/fantasy-land/Identity.js';

const addN = (...args) => R.sum(args);
const add3 = (a, b, c) => a + b + c;

describe('liftFN', function () {
  const addN3 = RA.liftFN(3, addN);
  const addN4 = RA.liftFN(4, addN);
  const addN5 = RA.liftFN(5, addN);

  it('should return a function', function () {
    assert.strictEqual(typeof RA.liftFN(3, add3), 'function');
  });

  it('should limit a variadic function to the specified arity', function () {
    assert.isTrue(
      R.equals(
        addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(3)
      )
    );
  });

  context(
    'given a variadic function with more arguments than its arity',
    function () {
      specify('should trow an error', function () {
        assert.throws(
          addN3.bind(
            null,
            Maybe.Some(1),
            Maybe.Some(1),
            Maybe.Some(1),
            Maybe.Some(1)
          ),
          TypeError
        );
      });
    }
  );

  it('should lift functions of any arity', function () {
    assert.isTrue(
      R.equals(
        addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(3)
      )
    );
    assert.isTrue(
      R.equals(
        addN4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(4)
      )
    );
    assert.isTrue(
      R.equals(
        addN5(
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1),
          Maybe.Some(1)
        ),
        Maybe.Some(5)
      )
    );
  });

  it('should retain order of arguments', function () {
    assert.isTrue(
      R.equals(
        RA.liftFN(3, add3)(Maybe.Some('a'), Maybe.Some('b'), Maybe.Some('c')),
        Maybe.Some('abc')
      )
    );
    assert.isTrue(
      R.equals(
        RA.liftFN(3, add3)(
          Identity.of('a'),
          Identity.of('b'),
          Identity.of('c')
        ),
        Identity.of('abc')
      )
    );
  });

  it('should be curried', function () {
    const f4 = RA.liftFN(4);
    assert.strictEqual(typeof f4, 'function');
    assert.isTrue(
      R.equals(
        f4(addN)(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
        Maybe.Some(4)
      )
    );
  });
});
