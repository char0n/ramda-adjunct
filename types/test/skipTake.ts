import * as RA from 'ramda-adjunct';

RA.skipTake(2, [1, 2, 3, 4]); // $ExpectType number[]
RA.skipTake<number>(2)([1, 2, 3, 4]); // $ExpectType number[]
