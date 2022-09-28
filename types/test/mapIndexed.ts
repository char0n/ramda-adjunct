import * as RA from 'ramda-adjunct';

RA.mapIndexed<number, number>((x) => x + 1)([1, 2, 3, 4]); // $ExpectType number[]
RA.mapIndexed<number, number>((x) => x + 1, [1, 2, 3, 4]); // $ExpectType number[]
