import * as RA from 'ramda-adjunct';

RA.ceil(.95); // $ExpectType number
RA.ceil(4); // $ExpectType number
RA.ceil(7.004); // $ExpectType number
RA.ceil(-0.95); // $ExpectType number
RA.ceil(-4); // $ExpectType number
RA.ceil(-7.004); // $ExpectType number

RA.ceil(null); // $ExpectError
RA.ceil(undefined); // $ExpectError
RA.ceil('a'); // $ExpectError
