import * as RA from 'ramda-adjunct';

RA.allEqual([1, 2, 3, 4]); // $ExpectType boolean
RA.allEqual([]); // $ExpectType boolean
