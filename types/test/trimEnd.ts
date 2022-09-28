import * as RA from 'ramda-adjunct';

RA.trimEnd('abc'); // $ExpectType string
RA.trimEnd(''); // $ExpectType string

// @ts-expect-error
RA.trimEnd(1);
// @ts-expect-error
RA.trimEnd({});
// @ts-expect-error
RA.trimEnd(null);
// @ts-expect-error
RA.trimEnd(undefined);
// @ts-expect-error
RA.trimEnd([]);

// alias
RA.trimRight('abc'); // $ExpectType string
RA.trimRight(''); // $ExpectType string

// @ts-expect-error
RA.trimRight(1);
// @ts-expect-error
RA.trimRight({});
// @ts-expect-error
RA.trimRight(null);
// @ts-expect-error
RA.trimRight(undefined);
// @ts-expect-error
RA.trimRight([]);
