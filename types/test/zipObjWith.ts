import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<{ [k: string]: number; }>(RA.zipObjWith((v, t) => [t, 1], ['a'], [2]));
expectType<{ [k: string]: string; }>(RA.zipObjWith((v, k) => ['a', 'b'])([1], ['b']));
expectType<{ [k: string]: number; }>(RA.zipObjWith<string, boolean, number>((v, k) => ['a', 1], [true], ['b']));

expectError(RA.zipObjWith((v, k) => true, ['a'], [2]));
expectError(RA.zipObjWith((v, k) => [k, v], {}, false));
expectError(RA.zipObjWith<boolean, boolean, string>((v, k) => ['a', 1], [true], ['b']));
expectError(RA.zipObjWith((v, k) => [k, v], undefined, undefined));
