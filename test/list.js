import * as RA from '../src/index';
import eq from './shared/eq';


describe('list', function() {
  it('tests creating list from items', function() {
    eq(RA.list('a', 'b', 'c'), ['a', 'b', 'c']);
  });

  it('test creating list from another list', function() {
    eq(RA.list(['a', 'b']), [['a', 'b']]);
  });

  it('test creating list from undefined', function() {
    eq(RA.list(undefined), [undefined]);
  });

  it('test creating empty list from empty items', function() {
    eq(RA.list(), []);
  });
});
