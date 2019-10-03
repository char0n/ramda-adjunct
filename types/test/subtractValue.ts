import * as RA from 'ramda-adjunct';

RA.subtractNum(3, 5); // $ExpectType number
RA.subtractNum(5, 3); // $ExpectType number
RA.subtractNum(3, 'foo'); // $ExpectError

RA.subtractNum(3)(5); // $ExpectType number
RA.subtractNum(5)(3); // $ExpectType number
RA.subtractNum(3)('foo'); // $ExpectError
