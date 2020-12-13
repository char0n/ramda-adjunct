import * as RA from 'ramda-adjunct';

RA.concatAll([[1], [2], [3]]); // $ExpectType number[] | undefined
RA.concatAll([]); // $ExpectType undefined

RA.concatAll(1); // $ExpectError
RA.concatAll({}); // $ExpectError
RA.concatAll([1]); // $ExpectError
