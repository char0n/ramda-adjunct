import * as RA from 'ramda-adjunct';

RA.toArray([1, 2, 3]); // $ExpectType any[]
RA.toArray(null); // $ExpectType any[]
RA.toArray(undefined); // $ExpectType any[]
RA.toArray(1); // $ExpectType any[]
RA.toArray({}); // $ExpectType any[]
