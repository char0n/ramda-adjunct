import * as RA from 'ramda-adjunct';

RA.escapeRegExp('abc'); // $ExpectType string
RA.escapeRegExp(1); // $ExpectType 1
RA.escapeRegExp({}); // $ExpectType {}
RA.escapeRegExp<number>(1); // $ExpectType number
RA.escapeRegExp<null>(null); // $ExpectType null
RA.escapeRegExp<undefined>(undefined); // $ExpectType undefined
