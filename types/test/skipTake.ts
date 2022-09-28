import * as RA from 'ramda-adjunct';

RA.skipTake(2, [1, 2, 3, 4]); // $ExpectType number[]
RA.skipTake<number>(2)([1, 2, 3, 4]); // $ExpectType number[]
RA.skipTake<number>(2)([1, 2, 3, 4]); // $ExpectType number[]

// @ts-expect-error
RA.skipTake(0, 'asd');
// @ts-expect-error
RA.skipTake('12', []);
// @ts-expect-error
RA.skipTake(null, []);
// @ts-expect-error
RA.skipTake(undefined, []);
// @ts-expect-error
RA.skipTake(undefined, []);
