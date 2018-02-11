import * as RA from '../src/index';
import eq from './shared/eq';

describe('rejectP', function() {
  const rejectWithError = () => Promise.reject(new Error('Expected method to reject.'));

  it('tests rejecting with no arguments', function() {
    return RA.rejectP()
      .then(rejectWithError)
      .catch(actual => eq(actual, undefined));
  });

  it('tests rejecting thenable values', function() {
    const expected = Promise.resolve(1);
    return RA.rejectP(expected)
      .then(rejectWithError)
      .catch(actual => eq(actual, expected));
  });

  it('tests rejecting the only argument', function() {
    const testNumber = RA.rejectP(1)
      .then(rejectWithError)
      .catch(actual => eq(actual, 1));
    const testString = RA.rejectP('a')
      .then(rejectWithError)
      .catch(actual => eq(actual, 'a'));
    const testArray = RA.rejectP([1, 2, 3])
      .then(rejectWithError)
      .catch(actual => eq(actual, [1, 2, 3]));
    const testObj = RA.rejectP({ a: 1 })
      .then(rejectWithError)
      .catch(actual => eq(actual, { a: 1 }));

    return Promise.all([testNumber, testString, testArray, testObj]);
  });
});
