import * as RA from 'ramda-adjunct';

RA.ceil(0.95); // $ExpectType number
RA.ceil(4); // $ExpectType number
RA.ceil(7.004); // $ExpectType number
RA.ceil(-0.95); // $ExpectType number
RA.ceil(-4); // $ExpectType number
RA.ceil(-7.004); // $ExpectType number

// @ts-expect-error
RA.ceil(null);
// @ts-expect-error
RA.ceil(undefined);
// @ts-expect-error
RA.ceil('a');
