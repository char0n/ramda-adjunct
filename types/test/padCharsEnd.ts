import * as RA from 'ramda-adjunct';

RA.padCharsEnd('-', 3, 'a'); // $ExpectType string
RA.padCharsEnd('$', 5)('abc'); // $ExpectType string
RA.padCharsEnd('*')(10, 'hello'); // $ExpectType string

// @ts-expect-error
RA.padCharsEnd(1, 2, '3');
// @ts-expect-error
RA.padCharsEnd('#', '10', 'afsd');
// @ts-expect-error
RA.padCharsEnd(undefined, '12', 54);
// @ts-expect-error
RA.padCharsEnd(null, 12, 'hello');
