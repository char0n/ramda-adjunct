import { view, set, over, assoc, replace } from 'ramda';

import RA from '../src/index';
import eq from './shared/eq';


describe('lensIso', function() {
  const lensJSON = RA.lensIso(JSON.parse, JSON.stringify);

  it('tests currying with arity 1', function() {
    const lensJSONA1 = RA.lensIso(JSON.parse)(JSON.stringify);

    eq(view(lensJSONA1, '{"a":1}'), { a: 1 });
  });

  it('tests currying with arity 2', function() {
    eq(view(lensJSON, '{"a":1}'), { a: 1 });
  });

  it('tests for `from` property', function() {
    eq(RA.isFunction(RA.lensIso.from), true);
  });

  it('tests reading through lens', function() {
    eq(view(lensJSON, '{"a":1}'), { a: 1 });
  });

  it('tests writing through lens', function() {
    eq(set(lensJSON, { b: 2 }, '{"a": 1}'), '{"b":2}');
  });

  it('tests applying a function over lens', function () {
    eq(over(lensJSON, assoc('b', 2), '{"a":1}'), '{"a":1,"b":2}');
  });

  context('when reversed isomorphism', function() {
    const lensJSONReversed = RA.lensIso.from(lensJSON);

    specify('test reading through lens', function() {
      eq(view(lensJSONReversed, { a: 1 }), '{"a":1}');
    });

    specify('tests writing through lens', function() {
      eq(set(lensJSONReversed, '{"b":2}', { a: 1 }), { b: 2 });
    });

    specify('tests applying a function over lens', function() {
      eq(over(lensJSONReversed, replace('}', ',"b":2}'), { a: 1 }), { a: 1, b: 2 });
    });
  });
});
