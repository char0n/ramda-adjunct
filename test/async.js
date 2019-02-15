import * as R from 'ramda';
import { assert } from 'chai';

import eq from './shared/eq';
import * as RA from '../src';

describe('async', function() {
  context('given wrapping of generator', function() {
    specify('should mimic async/await behavior', async function() {
      const asyncFn = RA.async(function* generator(val1, val2) {
        const a = yield RA.resolveP(val1);
        const b = yield RA.resolveP(val2);

        return a + b;
      });
      const expected = await asyncFn(1, 2);

      eq(expected, 3);
    });

    context('and the generator throw Error', function() {
      specify('should resolve with rejection', async function() {
        const asyncFn = RA.async(function* generator(val1, val2) {
          yield RA.resolveP(val1);
          yield RA.resolveP(val2);

          throw new Error('generator error');
        });

        try {
          await asyncFn(1, 2);
          throw new Error('fulfilling should fail');
        } catch (error) {
          assert.instanceOf(error, Error);
          eq(error.message, 'generator error');
        }
      });
    });
  });

  it('should support yield delegation', async function() {
    const foo = function* generator(val1, val2) {
      const a = yield RA.resolveP(val1);
      const b = yield RA.resolveP(val2);

      return a + b;
    };
    const bar = RA.async(function* generator(val1, val2) {
      const a = yield RA.resolveP(val1);
      const b = yield RA.resolveP(val2);
      const c = yield* foo(a, b);

      return c + 3;
    });

    eq(await bar(1, 2), 6);
  });

  it('should support async delegation', async function() {
    const foo = RA.async(function* generator(val1, val2) {
      const a = yield RA.resolveP(val1);
      const b = yield RA.resolveP(val2);

      return a + b;
    });
    const bar = RA.async(function* generator(val1, val2) {
      const a = yield RA.resolveP(val1);
      const b = yield RA.resolveP(val2);
      const c = yield foo(a, b);

      return c + 3;
    });

    eq(await bar(1, 2), 6);
  });

  it('should support recursion delegation', async function() {
    const async = RA.async(function* generator(val) {
      let newVal = val;

      if (val > 1) {
        newVal = yield async(val - 1);
      }

      return yield newVal;
    });

    eq(await async(10), 1);
  });

  it('should curry', async function() {
    const async = RA.async(R.__);
    const asyncFn = async(function* generator() {
      yield RA.resolveP(1);
      return 2;
    });
    const expected = await asyncFn();

    eq(expected, 2);
  });

  context('given wrapping of generator with arity of 2', function() {
    let asyncFn;

    beforeEach(function() {
      // eslint-disable-next-line require-yield
      asyncFn = RA.async(function* generator(a, b) {
        return a + b;
      });
    });

    specify('should translate generator arity to wrapper', function() {
      eq(asyncFn.length, 2);
    });

    specify('should curry wrapper to appropriate arity', async function() {
      eq(await asyncFn(1, 2), 3);
      eq(await asyncFn(1)(2), 3);
    });
  });

  context('given wrapping of generator with arity of 0', function() {
    context('then the resulting wrapper', function() {
      let asyncFn;

      beforeEach(function() {
        // eslint-disable-next-line require-yield
        asyncFn = RA.async(function* generator() {
          return 1;
        });
      });

      specify('should not support placeholder', async function() {
        const expected = await asyncFn(R.__);

        eq(expected, 1);
      });

      specify('should support call without arguments', async function() {
        const expected = await asyncFn();

        eq(expected, 1);
      });
    });
  });
});
