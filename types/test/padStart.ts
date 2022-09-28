import * as RA from 'ramda-adjunct';

RA.padStart(3, 'a'); // $ExpectType string
RA.padStart(5)('abc'); // $ExpectType string
RA.padStart(10, 'hello'); // $ExpectType string

// @ts-expect-error
RA.padStart('10', 'afsd');
// @ts-expect-error
RA.padStart('12', 54);
// @ts-expect-error
RA.padStart(null, 'a');
// @ts-expect-error
RA.padStart(undefined, 12);
// @ts-expect-error
RA.padStart(undefined, 'abc');
