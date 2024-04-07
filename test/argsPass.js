import { stub } from 'sinon';
import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('argsPass', function () {
  let p1False;
  let p1True;
  let p2True;
  let p2False;
  let p3True;
  let p3False;
  let c2True;
  let c1True;
  let c2False;
  let c1False;

  beforeEach(function () {
    p1False = stub().returns(false);
    p1True = stub().returns(true);
    p2False = stub().returns(false);
    p2True = stub().returns(true);
    p3False = stub().returns(false);
    p3True = stub().returns(true);
    c2True = stub().returns(true);
    c1True = stub().returns(c2True);
    c2False = stub().returns(false);
    c1False = stub().returns(c2False);
  });

  it('should return a new curried function for each argument supplied', function () {
    const f = RA.argsPass(c1True, [p1True, p2True, p3True]);
    assert.isTrue(f(1)(2)(3));
    assert.isTrue(p1True.calledWith(1));
    assert.isTrue(p2True.calledWith(2));
    assert.isTrue(p3True.calledWith(3));
    assert.isTrue(c2True.calledWith([true, true, true]));
    assert.isTrue(p1True.calledOnce);
    assert.isTrue(p1True.calledOnce);
    assert.isTrue(p2True.calledOnce);
    assert.isTrue(c1True.calledOnce);
    assert.isTrue(c2True.calledOnce);
  });

  context('given same number of functions as arguments', function () {
    context('given all functions returning truthy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(c1True, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3));
        assert.isTrue(p1True.calledWith(1));
        assert.isTrue(p2True.calledWith(2));
        assert.isTrue(p3True.calledWith(3));
        assert.isTrue(c2True.calledWith([true, true, true]));
        assert.isTrue(p1True.calledOnce);
        assert.isTrue(p2True.calledOnce);
        assert.isTrue(p3True.calledOnce);
        assert.isTrue(c1True.calledOnce);
        assert.isTrue(c2True.calledOnce);
      });
    });

    context('given one function returning a falsy value', function () {
      specify('should return `false`', function () {
        const f = RA.argsPass(c1False, [p1True, p2True, p3False]);
        assert.isFalse(f(1, 2, 3));
        assert.isTrue(p1True.calledWith(1));
        assert.isTrue(p2True.calledWith(2));
        assert.isTrue(p3False.calledWith(3));
        assert.isTrue(c2False.calledWith([true, true, false]));
        assert.isTrue(p1True.calledOnce);
        assert.isTrue(p2True.calledOnce);
        assert.isTrue(p3False.calledOnce);
        assert.isTrue(c1False.calledOnce);
        assert.isTrue(c2False.calledOnce);
      });
    });
  });

  context('given more arguments than predicates', function () {
    context('given all functions returning truthy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(c1True, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3, 4));
        assert.isTrue(p1True.calledWith(1));
        assert.isTrue(p2True.calledWith(2));
        assert.isTrue(p3True.calledWith(3));
        assert.isTrue(c2True.calledWith([true, true, true, 4]));
        assert.isTrue(p1True.calledOnce);
        assert.isTrue(p2True.calledOnce);
        assert.isTrue(p3True.calledOnce);
        assert.isTrue(c1True.calledOnce);
        assert.isTrue(c2True.calledOnce);
      });
    });

    context('given one predicate failing', function () {
      specify('should return `false`', function () {
        const f = RA.argsPass(c1False, [p1True, p2True, p3False]);
        assert.isFalse(f(1, 2, 3, 4));
        assert.isTrue(p1True.calledWith(1));
        assert.isTrue(p2True.calledWith(2));
        assert.isTrue(p3False.calledWith(3));
        assert.isTrue(c2False.calledWith([true, true, false, 4]));
        assert.isTrue(p1True.calledOnce);
        assert.isTrue(p2True.calledOnce);
        assert.isTrue(p3False.calledOnce);
        assert.isTrue(c1False.calledOnce);
        assert.isTrue(c2False.calledOnce);
      });
    });
  });

  context('with `all` as the combinator', function () {
    context('with all functions returning truthy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.all, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a falsy value', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.all, [p1True, p2True, p3False]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });

  context('with `any` as the combining predicate', function () {
    context('with all functions returning truthy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.any, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a truthy value', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.any, [p1True, p2False, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with all functions returning falsy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.any, [p1False, p2False, p3False]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });

  context('with `none` as the combining predicate', function () {
    context('with all functions returning truthy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.none, [p1False, p2False, p3False]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with all functions returning falsy values', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.none, [p1False, p2False, p3False]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a truthy value', function () {
      specify('should return `true`', function () {
        const f = RA.argsPass(R.none, [p1False, p2False, p3True]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });

  it('should curry', function () {
    assert.isFalse(RA.argsPass(R.none, [p1False, p2False, p3True])(1, 2, 3));
    assert.isFalse(RA.argsPass(R.none)([p1False, p2False, p3True])(1, 2, 3));
  });

  it('should support placeholder to specify "gaps"', function () {
    const f = RA.argsPass(R.__)(R.none, [p1False, p2False, p3True]);
    assert.isFalse(f(1, 2, 3));
  });
});
