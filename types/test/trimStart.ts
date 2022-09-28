import * as RA from 'ramda-adjunct';

RA.trimStart('abc'); // $ExpectType string
RA.trimStart(''); // $ExpectType string

// @ts-expect-error
RA.trimStart(1);
// @ts-expect-error
RA.trimStart({});
// @ts-expect-error
RA.trimStart(null);
// @ts-expect-error
RA.trimStart(undefined);
// @ts-expect-error
RA.trimStart([]);

// alias
RA.trimLeft('abc'); // $ExpectType string
RA.trimLeft(''); // $ExpectType string

// @ts-expect-error
RA.trimLeft(1);
// @ts-expect-error
RA.trimLeft({});
// @ts-expect-error
RA.trimLeft(null);
// @ts-expect-error
RA.trimLeft(undefined);
// @ts-expect-error
RA.trimLeft([]);
