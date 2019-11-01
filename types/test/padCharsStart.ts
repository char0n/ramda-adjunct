import * as RA from 'ramda-adjunct';

RA.padCharsStart('-', 3, 'a'); // $ExpectType string
RA.padCharsStart('$', 5)('abc'); // $ExpectType string
RA.padCharsStart('*')(10, 'hello'); // $ExpectType string

RA.padCharsStart(1, 2, '3'); // $ExpectError
RA.padCharsStart('#', '10', 'afsd'); // $ExpectError
RA.padCharsStart(undefined, '12', 54); // $ExpectError
RA.padCharsStart(null, 12, 'hello'); // $ExpectError
