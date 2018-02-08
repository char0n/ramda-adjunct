import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('mapIndexed', function () {
  const joinArgs = (separator = '') => R.compose(R.join(separator), RA.list);
  context('when second parameter is an array', function () {
    specify('should map joinArgs function', function () {
      eq(RA.mapIndexed(joinArgs(), ['a', 'b', 'c']), ['a0a,b,c', 'b1a,b,c', 'c2a,b,c']);
    });
  });
  context('when second parameter is an object', function () {
    specify('should map joinArgs function', function () {
      eq(RA.mapIndexed(joinArgs(), { a: 'a', b: 'b', c: 'c' }), { a: 'a0[object Object]', b: 'b1[object Object]', c: 'c2[object Object]' });
    });
  });
  context('when second parameter is a functor', function () {
    specify('should map joinArgs function', function () {
      eq(RA.mapIndexed(joinArgs(), RA.Identity.of('a')).value, 'a0[object Object]');
    });
  });
  context('when second parameter is a string', function () {
    specify('should map joinArgs function', function () {
      eq(RA.mapIndexed(joinArgs(), 'abc'), ['a0abc', 'b1abc', 'c2abc']);
    });
  });
});
