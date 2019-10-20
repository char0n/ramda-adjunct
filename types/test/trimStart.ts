import * as RA from 'ramda-adjunct';

RA.trimStart('abc'); // $ExpectType string
RA.trimStart(''); // $ExpectType string

RA.trimStart(1); // $ExpectError
RA.trimStart({}); // $ExpectError
RA.trimStart(null); // $ExpectError
RA.trimStart(undefined); // $ExpectError
RA.trimStart([]); // $ExpectError

RA.trimLeft('abc'); // $ExpectType string
RA.trimLeft(''); // $ExpectType string

RA.trimLeft(1); // $ExpectError
RA.trimLeft({}); // $ExpectError
RA.trimLeft(null); // $ExpectError
RA.trimLeft(undefined); // $ExpectError
RA.trimLeft([]); // $ExpectError
