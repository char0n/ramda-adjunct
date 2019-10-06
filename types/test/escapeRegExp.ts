import * as RA from 'ramda-adjunct';

RA.escapeRegExp('abc'); // $ExpectType string
RA.escapeRegExp(''); // $ExpectType string

// tslint:disable-next-line:no-construct
RA.escapeRegExp(new String('')); // $ExpectError
RA.escapeRegExp(1); // $ExpectError
RA.escapeRegExp({}); // $ExpectError
RA.escapeRegExp(null); // $ExpectError
RA.escapeRegExp(undefined); // $ExpectError
RA.escapeRegExp([]); // $ExpectError
