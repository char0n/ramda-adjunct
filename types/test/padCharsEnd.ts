import * as RA from 'ramda-adjunct';

RA.padCharsEnd('-', 3, 'a'); // $ExpectType string
RA.padCharsEnd('$', 5)('abc'); // $ExpectType string
RA.padCharsEnd('*')(10, 'hello'); // $ExpectType string

RA.padCharsEnd(1, 2, '3'); // $ExpectError
RA.padCharsEnd('#', '10', 'afsd'); // $ExpectError
RA.padCharsEnd(undefined, '12', 54); // $ExpectError
RA.padCharsEnd(null, 12, 'hello'); // $ExpectError
