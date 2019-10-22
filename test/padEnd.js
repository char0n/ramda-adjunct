import * as RA from '../src';
import eq from './shared/eq';

describe('padEnd', function() {
  specify('should pad string with spaces', function() {
    eq(RA.padEnd(3, 'a'), 'a  ');
  });

  context('given targetLength as 0', function() {
    specify('should return original string', function() {
      eq(RA.padEnd(0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function() {
    specify('should return original string', function() {
      eq(RA.padEnd(1, 'abc'), 'abc');
    });
  });

  context('given targetLength supplied as float', function() {
    specify('should convert targetLength to integer', function() {
      eq(RA.padEnd(7.5, 'abc'), 'abc    ');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function() {
      specify('should return padded string', function() {
        eq(RA.padEnd('5', 'abc'), 'abc  ');
      });
    }
  );

  context('given targeLength is a negative number', function() {
    specify('should return original string', function() {
      eq(RA.padEnd(-10, 'abc'), 'abc');
    });
  });

  specify('should be curried', function() {
    eq(RA.padEnd(5, 'abc'), 'abc  ');
    eq(RA.padEnd(5)('abc'), 'abc  ');
  });
});
