import * as RA from 'ramda-adjunct';

RA.trimStart('abc'); // $ExpectType string
RA.trimStart(''); // $ExpectType string

RA.trimStart(1); // $ExpectError
RA.trimStart({}); // $ExpectError
RA.trimStart(null); // $ExpectError
RA.trimStart(undefined); // $ExpectError
RA.trimStart([]); // $ExpectError
