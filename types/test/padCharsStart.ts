import * as RA from 'ramda-adjunct';

RA.padCharsStart('-', 3, 'a'); // $ExpectType string
RA.padCharsStart('$', 5)('abc'); // $ExpectType string
RA.padCharsStart('*')(10, 'hello'); // $ExpectType string

// @ts-expect-error
RA.padCharsStart(1, 2, '3');
// @ts-expect-error
RA.padCharsStart('#', '10', 'afsd');
// @ts-expect-error
RA.padCharsStart(undefined, '12', 54);
// @ts-expect-error
RA.padCharsStart(null, 12, 'hello');
