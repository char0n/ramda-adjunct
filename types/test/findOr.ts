import * as RA from 'ramda-adjunct';

RA.findOr(1, (val) => val === 1, [1, 2, 3]); // $ExpectType number
RA.findOr('1', (val) => val === '1', ['1', '2', '3']); // $ExpectType string
RA.findOr('1', (val) => val === 4, [1, 2, 3]); // $ExpectType number | "1"
RA.findOr(1, () => false, [1, 2, 3]); // $ExpectType number

RA.findOr<'1', number>('1')((val) => val === 4, [1, 2, 3]); // $ExpectType number | "1"
RA.findOr<'1', number>('1', (val) => val === 4)([1, 2, 3]); // $ExpectType number | "1"
RA.findOr<'1', number>('1')((val) => val === 4)([1, 2, 3]); // $ExpectType number | "1"

// @ts-expect-error
RA.findOr(1, (val) => val, [1, 2, 3]);
// @ts-expect-error
RA.findOr(1, (val) => val);
// @ts-expect-error
RA.findOr();
