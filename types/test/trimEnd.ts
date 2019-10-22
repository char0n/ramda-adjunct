import * as RA from 'ramda-adjunct';

RA.trimEnd('abc'); // $ExpectType string
RA.trimEnd(''); // $ExpectType string

RA.trimEnd(1); // $ExpectError
RA.trimEnd({}); // $ExpectError
RA.trimEnd(null); // $ExpectError
RA.trimEnd(undefined); // $ExpectError
RA.trimEnd([]); // $ExpectError

// alias
RA.trimRight('abc'); // $ExpectType string
RA.trimRight(''); // $ExpectType string

RA.trimRight(1); // $ExpectError
RA.trimRight({}); // $ExpectError
RA.trimRight(null); // $ExpectError
RA.trimRight(undefined); // $ExpectError
RA.trimRight([]); // $ExpectError
