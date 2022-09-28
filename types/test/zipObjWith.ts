import * as RA from 'ramda-adjunct';

RA.zipObjWith((v, t) => [t, 1], ['a'], [2]); // $ExpectType { [k: string]: number; }
RA.zipObjWith((v, k) => ['a', 'b'])([1], ['b']); // $ExpectType { [k: string]: string; }
RA.zipObjWith<string, boolean, number>((v, k) => ['a', 1], [true], ['b']); // $ExpectType { [k: string]: number; }

// @ts-expect-error
RA.zipObjWith((v, k) => true, ['a'], [2]);
// @ts-expect-error
RA.zipObjWith((v, k) => [k, v], {}, false);
// @ts-expect-error
RA.zipObjWith<boolean, boolean, string>((v, k) => ['a', 1], [true], ['b']);
// @ts-expect-error
RA.zipObjWith((v, k) => [k, v], undefined, undefined);
