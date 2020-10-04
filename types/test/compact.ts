import * as RA from 'ramda-adjunct';

const arr: number[] = RA.compact([1, 2, 3, null]);
arr; // $ExpectType number[]

RA.compact(1); // $ExpectError
RA.compact(''); // $ExpectError
RA.compact({}); // $ExpectError
