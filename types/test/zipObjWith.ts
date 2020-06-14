import * as RA from 'ramda-adjunct';

RA.zipObjWith((_, k) => [k, 1], ['a'], [2]); // $ExpectType Record<string | number | symbol, unknown>
RA.zipObjWith(() => ['a', 'b'])([1], ['b']); // $ExpectType Record<string | number | symbol, unknown>

RA.zipObjWith(() => true, ['a'], [2]); // $ExpectError
RA.zipObjWith((v, k) => [k, v], {}, false); // $ExpectError
RA.zipObjWith(() => ['a', 1], [true], ['b']); // $ExpectError
RA.zipObjWith((v, k) => [k, v], undefined, undefined); // $ExpectError
