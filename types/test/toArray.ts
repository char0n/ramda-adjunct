import * as RA from 'ramda-adjunct';

RA.toArray('1'); // $ExpectType string[]
RA.toArray([1, 2, 3]); // $ExpectType number[]
RA.toArray({ a: 1, b: 2 }); // $ExpectType number[]
RA.toArray({ c: 0, d: 'd' }); // $ExpectType (string | number)[]
RA.toArray({}); // $ExpectType never[]

RA.toArray(null); // $ExpectError
RA.toArray(undefined); // $ExpectError
RA.toArray(1); // $ExpectError
