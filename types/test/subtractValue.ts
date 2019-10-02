import * as RA from 'ramda-adjunct';

RA.subtractValue(3, 5); // $ExpectType number
RA.subtractValue(5, 3); // $ExpectType number
RA.subtractValue(3, 'foo'); // $ExpectError

RA.subtractValue(3)(5); // $ExpectType number
RA.subtractValue(5)(3); // $ExpectType number
RA.subtractValue(3)('foo'); // $ExpectError
