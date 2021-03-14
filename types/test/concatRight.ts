import * as RA from 'ramda-adjunct';

RA.concatRight('ab', 'cd'); // $ExpectType string
RA.concatRight('ab')('cd'); // $ExpectType string
RA.concatRight([1, 2], [3, 4]); // $ExpectType number[]
RA.concatRight([1, 2])([3, 4]); // $ExpectType number[]

RA.concatRight(1, 2); // $ExpectError
RA.concatRight({}, {}); // $ExpectError
RA.concatRight('ab', [1, 2]); // $ExpectError
