import * as RA from 'ramda-adjunct';

RA.copyKeys({ a: 'b' }, { a: true }); // $ExpectType object
RA.copyKeys({ a: 'b' }, { a: true, b: false }); // $ExpectType object
RA.copyKeys({ a: 'b' })({ a: true }); // $ExpectType object

// @ts-expect-error
RA.copyKeys()();
// @ts-expect-error
RA.copyKeys();
// @ts-expect-error
RA.copyKeys(1, {});
// @ts-expect-error
RA.copyKeys(null, {});
// @ts-expect-error
RA.copyKeys({}, '');
