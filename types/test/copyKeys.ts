import * as RA from 'ramda-adjunct';

RA.copyKeys({ a: 'b' }, { a: true }); // $ExpectType object
RA.copyKeys({ a: 'b' }, { a: true, b: false }); // $ExpectType object
RA.copyKeys({ a: 'b' })({ a: true }); // $ExpectType object

RA.copyKeys()(); // $ExpectError
RA.copyKeys(); // $ExpectError
RA.copyKeys(1, {}); // $ExpectError
RA.copyKeys(null, {}); // $ExpectError
RA.copyKeys({}, ''); // $ExpectError
