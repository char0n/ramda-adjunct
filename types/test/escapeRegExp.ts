import * as RA from 'ramda-adjunct';

RA.escapeRegExp('abc'); // $ExpectType string
RA.escapeRegExp(''); // $ExpectType string

// @ts-expect-error
RA.escapeRegExp(new String('')); // tslint:disable-line:no-construct
// @ts-expect-error
RA.escapeRegExp(1);
// @ts-expect-error
RA.escapeRegExp({});
// @ts-expect-error
RA.escapeRegExp(null);
// @ts-expect-error
RA.escapeRegExp(undefined);
// @ts-expect-error
RA.escapeRegExp([]);
