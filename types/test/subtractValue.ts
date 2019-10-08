import * as RA from 'ramda-adjunct';

RA.subtractNum(3, 5); // $ExpectType number
RA.subtractNum(5, 3); // $ExpectType number

RA.subtractNum(3)(5); // $ExpectType number
RA.subtractNum(5)(3); // $ExpectType number

RA.subtractNum('a', 'b'); // $ExpectError
RA.subtractNum('a')('b'); // $ExpectError
RA.subtractNum(1, undefined); // $ExpectError
RA.subtractNum(1)(undefined); // $ExpectError
RA.subtractNum(1, {}); // $ExpectError
RA.subtractNum(1)({}); // $ExpectError
RA.subtractNum({}, 1); // $ExpectError
RA.subtractNum({})(1); // $ExpectError
