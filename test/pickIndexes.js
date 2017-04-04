import chai from 'chai';

import RA from '../src/index';
import eq from './shared/eq';


describe('pickIndexes', function() {
  it('tests picking values from list by indexes', function() {
    eq(RA.pickIndexes([0, 2], ['a', 'b', 'c']), ['a', 'c']);
  });

  it('tests currying', function() {
    eq(RA.pickIndexes([0, 2])(['a', 'b', 'c']), ['a', 'c']);
  });

  it('tests picking values from list by indexes out of range', function() {
    eq(RA.pickIndexes([0, 5], ['a', 'b', 'c']), ['a', undefined]);
  });

  it('tests picking values from list by non array', function() {
    chai.assert.throws(RA.pickIndexes.bind(null, undefined, ['a', 'b', 'c']), TypeError);
  });

  it('tests picking values from non-array', function() {
    chai.assert.throws(RA.pickIndexes.bind(null, [0, 2], undefined), TypeError);
  });
});
