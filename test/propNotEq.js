import * as RA from '../src/index';
import eq from './shared/eq';


describe('propNotEq', function() {
  let prop;
  let value;
  let obj;
  let expected;

  beforeEach(function() {
    prop = 'a';
    value = 'foo';
    obj = { a: 1, b: 2 };
    expected = true;
  });

  it('tests currying', function() {
    eq(RA.propNotEq(prop, value, obj), expected);
    eq(RA.propNotEq(prop)(value, obj), expected);
    eq(RA.propNotEq(prop, value)(obj), expected);
    eq(RA.propNotEq(prop)(value)(obj), expected);
  });

  it('tests prop value is not equal', function() {
    eq(RA.propNotEq(prop, value, obj), expected);
  });

  it('tests prop value is equal', function() {
    value = 1;
    expected = false;

    eq(RA.propNotEq(prop, value, obj), expected);
  });

  it('tests no prop', function() {
    prop = 'bar';

    eq(RA.propNotEq(prop, value, obj), expected);
  });
});
