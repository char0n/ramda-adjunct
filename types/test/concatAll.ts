import * as RA from 'ramda-adjunct';

RA.concatAll([[1], [2], [3]]); // $ExpectType number[] | undefined
RA.concatAll([]); // $ExpectType undefined

// @ts-expect-error
RA.concatAll(1);
// @ts-expect-error
RA.concatAll({});
// @ts-expect-error
RA.concatAll([1]);
