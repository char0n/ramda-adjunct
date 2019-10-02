import * as RA from 'ramda-adjunct';

RA.toArray([1, 2, 3]); // $ExpectType number[]
RA.toArray(null); // $ExpectType null[]
RA.toArray(undefined); // $ExpectType undefined[]
