import * as RA from 'ramda-adjunct';

RA.padEnd(3, 'a'); // $ExpectType string
RA.padEnd(5)('abc'); // $ExpectType string
RA.padEnd(10, 'hello'); // $ExpectType string

RA.padEnd('10', 'afsd'); // $ExpectError
RA.padEnd('12', 54); // $ExpectError
RA.padEnd(null, 'a'); // $ExpectError
RA.padEnd(undefined, 12); // $ExpectError
RA.padEnd(undefined, 'abc'); // $ExpectError
