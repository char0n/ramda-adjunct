import * as RA from '../src/index';
import eq from './shared/eq';


describe('resolveP', function () {
  it('tests resolving with no arguments', function () {
    return RA.resolveP().then(actual => eq(actual, undefined));
  });

  it('tests resolving thenable values', function () {
    return RA.resolveP(Promise.resolve(1)).then(actual => eq(actual, 1));
  });

  it('tests resolving the only argument', function () {
    const testNumber = RA.resolveP(1);
    const testString = RA.resolveP('a');
    const testArray = RA.resolveP([1, 2, 3]);
    const testObj = RA.resolveP({ a: 1 });


    return Promise.all([testNumber, testString, testArray, testObj]);
  });
});
