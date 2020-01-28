import * as RA from 'ramda-adjunct';

RA.padStart(3, 'a'); // $ExpectType string
RA.padStart(5)('abc'); // $ExpectType string
RA.padStart(10, 'hello'); // $ExpectType string

RA.padStart('10', 'afsd'); // $ExpectError
RA.padStart('12', 54); // $ExpectError
RA.padStart(null, 'a'); // $ExpectError
RA.padStart(undefined, 12); // $ExpectError
RA.padStart(undefined, 'abc'); // $ExpectError
