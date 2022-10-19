import * as RA from 'ramda-adjunct';

RA.divideNum(2, 1); // $ExpectType number
RA.divideNum(2.0, 1.0); // $ExpectType number
RA.divideNum(0, 2.0); // $ExpectType number
RA.divideNum(0.0, 2.0); // $ExpectType number
RA.divideNum(-0.0, 2.0); // $ExpectType number

RA.divideNum(2)(1); // $ExpectType number
RA.divideNum(2.0)(1.0); // $ExpectType number
RA.divideNum(0)(2.0); // $ExpectType number
RA.divideNum(0.0)(2.0); // $ExpectType number
RA.divideNum(-0.0)(2.0); // $ExpectType number

// @ts-expect-error
RA.divideNum('a', 'b');
// @ts-expect-error
RA.divideNum('a')('b');
// @ts-expect-error
RA.divideNum(1, undefined);
// @ts-expect-error
RA.divideNum(1)(undefined);
// @ts-expect-error
RA.divideNum(1, {});
// @ts-expect-error
RA.divideNum(1)({});
// @ts-expect-error
RA.divideNum({}, 1);
// @ts-expect-error
RA.divideNum({})(1);
