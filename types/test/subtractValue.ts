import * as RA from 'ramda-adjunct';

RA.subtractNum(3, 5); // $ExpectType number
RA.subtractNum(5, 3); // $ExpectType number

RA.subtractNum(3)(5); // $ExpectType number
RA.subtractNum(5)(3); // $ExpectType number

// @ts-expect-error
RA.subtractNum('a', 'b');
// @ts-expect-error
RA.subtractNum('a')('b');
// @ts-expect-error
RA.subtractNum(1, undefined);
// @ts-expect-error
RA.subtractNum(1)(undefined);
// @ts-expect-error
RA.subtractNum(1, {});
// @ts-expect-error
RA.subtractNum(1)({});
// @ts-expect-error
RA.subtractNum({}, 1);
// @ts-expect-error
RA.subtractNum({})(1);
