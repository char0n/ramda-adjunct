import * as RA from 'ramda-adjunct';

RA.findOr(1, val => val === 1, [1, 2, 3]); // $ExpectType number
RA.findOr('1', val => val === '1', ['1', '2', '3']); // $ExpectType string
RA.findOr('1', val => val === 4, [1, 2, 3]); // $ExpectType number | "1"
RA.findOr(1, () => false, [1, 2, 3]); // $ExpectType number

RA.findOr('1')(val => val === 4, [1, 2, 3]); // $ExpectType number | "1"
RA.findOr('1', val => val === 4)([1, 2, 3]); // $ExpectType number | "1"
RA.findOr('1')(val => val === 4)([1, 2, 3]); // $ExpectType number | "1"

RA.findOr(1, val => val, [1, 2, 3]); // $ExpectError
RA.findOr(1, val => val); // $ExpectError
RA.findOr(1); // $ExpectError
RA.findOr(); // $ExpectError
