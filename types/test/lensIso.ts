import * as RA from 'ramda-adjunct';

const lensJSON = RA.lensIso(JSON.parse, JSON.stringify); // $ExpectType Function
RA.lensIso(JSON.parse); // $ExpectType (from: Function) => Function
RA.lensIso(JSON.parse, 'Hello world'); // $ExpectError
RA.lensIso(JSON.parse, 0); // $ExpectError
RA.lensIso(JSON.parse, {}); // $ExpectError
RA.lensIso(JSON.parse, []); // $ExpectError
RA.lensIso('Hello world'); // $ExpectError
RA.lensIso(0); // $ExpectError
RA.lensIso({}); // $ExpectError
RA.lensIso([]); // $ExpectError

RA.lensIso.from(lensJSON); // $ExpectType Function
RA.lensIso.from('Hello world'); // $ExpectError
RA.lensIso.from(0); // $ExpectError
RA.lensIso.from({}); // $ExpectError
RA.lensIso.from([]); // $ExpectError
