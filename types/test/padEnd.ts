import * as RA from 'ramda-adjunct';

RA.padEnd(3, 'a'); // $ExpectType string
RA.padEnd(5)('abc'); // $ExpectType string
RA.padEnd(10, 'hello'); // $ExpectType string

// @ts-expect-error
RA.padEnd('10', 'afsd');
// @ts-expect-error
RA.padEnd('12', 54);
// @ts-expect-error
RA.padEnd(null, 'a');
// @ts-expect-error
RA.padEnd(undefined, 12);
// @ts-expect-error
RA.padEnd(undefined, 'abc');
