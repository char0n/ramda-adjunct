import * as RA from 'ramda-adjunct';

RA.skipTake(2, [1, 2, 3, 4]); // $ExpectType number[]
RA.skipTake(2)([1, 2, 3, 4]); // $ExpectType number[]
RA.skipTake(2)([1, 2, 3, 4]); // $ExpectType number[]

RA.skipTake(0, 'asd'); // $ExpectError
RA.skipTake('12', []); // $ExpectError
RA.skipTake(null, []); // $ExpectError
RA.skipTake(undefined, []); // $ExpectError
RA.skipTake(undefined, []); // $ExpectError
