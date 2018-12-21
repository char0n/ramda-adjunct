import * as RA from '../src/index';
import eq from './shared/eq';

describe('defaultWhen', function() {
  it('should return default value', function() {
    eq(RA.defaultWhen(RA.isNull, 1, null), 1);
    eq(RA.defaultWhen(RA.isString, 2, ''), 2);
  });

  it('should return value', function() {
    eq(RA.defaultWhen(RA.isNull, 1, undefined), undefined);
    eq(RA.defaultWhen(RA.isString, 2, 3), 3);
  });

  it('should curry', function() {
    eq(RA.defaultWhen(RA.isNull)(1)(null), 1);
    eq(RA.defaultWhen(RA.isNull, 1)(null), 1);
    eq(RA.defaultWhen(RA.isNull, 1, null), 1);
  });
});
