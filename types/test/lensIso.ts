import * as RA from 'ramda-adjunct';

const lensJSON = RA.lensIso(JSON.parse, JSON.stringify); // $ExpectType Function
RA.lensIso(JSON.parse); // $ExpectType (from: Function) => Function
// @ts-expect-error
RA.lensIso(JSON.parse, 'Hello world');
// @ts-expect-error
RA.lensIso(JSON.parse, 0);
// @ts-expect-error
RA.lensIso(JSON.parse, {});
// @ts-expect-error
RA.lensIso(JSON.parse, []);
// @ts-expect-error
RA.lensIso('Hello world');
// @ts-expect-error
RA.lensIso(0);
// @ts-expect-error
RA.lensIso({});
// @ts-expect-error
RA.lensIso([]);

RA.lensIso.from(lensJSON); // $ExpectType Function
// @ts-expect-error
RA.lensIso.from('Hello world');
// @ts-expect-error
RA.lensIso.from(0);
// @ts-expect-error
RA.lensIso.from({});
// @ts-expect-error
RA.lensIso.from([]);
