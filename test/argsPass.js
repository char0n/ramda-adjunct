import { stub } from 'sinon';
import { all, any, none } from 'ramda';
import { assert } from 'chai';

import { argsPass } from '../src/index';

describe('argsPass', function() {
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

  beforeEach(function() {
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

  it('returns a new curried function for each argument supplied', function() {
    const f = argsPass(c1True, [p1True, p2True, p3True]);
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

  context('with same number of functions as arguments', function() {
    context('with all functions returning truthy values', function() {
      specify('returns true', function() {
        const f = argsPass(c1True, [p1True, p2True, p3True]);
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

    context('with one function returning a falsy value', function() {
      specify('returns false', function() {
        const f = argsPass(c1False, [p1True, p2True, p3False]);
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

  context('with more arguments than predicates', function() {
    context('with all functions returning truthy values', function() {
      specify('returns true', function() {
        const f = argsPass(c1True, [p1True, p2True, p3True]);
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

    context('with one predicate failing', function() {
      specify('returns false', function() {
        const f = argsPass(c1False, [p1True, p2True, p3False]);
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

  context('with `all` as the combinator', function() {
    context('with all functions returning truthy values', function() {
      specify('returns true', function() {
        const f = argsPass(all, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a falsy value', function() {
      specify('returns true', function() {
        const f = argsPass(all, [p1True, p2True, p3False]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });

  context('with `any` as the combining predicate', function() {
    context('with all functions returning truthy values', function() {
      specify('returns true', function() {
        const f = argsPass(any, [p1True, p2True, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a truthy value', function() {
      specify('returns true', function() {
        const f = argsPass(any, [p1True, p2False, p3True]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with all functions returning falsy values', function() {
      specify('returns true', function() {
        const f = argsPass(any, [p1False, p2False, p3False]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });

  context('with `none` as the combining predicate', function() {
    context('with all functions returning truthy values', function() {
      specify('returns true', function() {
        const f = argsPass(none, [p1False, p2False, p3False]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with all functions returning falsy values', function() {
      specify('returns true', function() {
        const f = argsPass(none, [p1False, p2False, p3False]);
        assert.isTrue(f(1, 2, 3));
      });
    });

    context('with one function returning a truthy value', function() {
      specify('returns true', function() {
        const f = argsPass(none, [p1False, p2False, p3True]);
        assert.isFalse(f(1, 2, 3));
      });
    });
  });
});
