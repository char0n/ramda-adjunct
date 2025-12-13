import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<[string[], number[]]>(RA.unzipObjWith((v, k) => [k, 1], { a: 1 }));
expectType<[number[], string[]]>(RA.unzipObjWith((v, k) => [2, 'hello'])({ a: 1 }));
expectType<[string[], number[]]>(RA.unzipObjWith((v, k) => [k, 1], {}));
expectType<[boolean[], number[]]>(RA.unzipObjWith<string, boolean, number>((v, k) => [true, 5], { a: 'b' }));

expectError(RA.unzipObjWith((v, k) => true, { a: 1 }));
expectError(RA.unzipObjWith((v, k) => [k, v], []));
expectError(RA.unzipObjWith<string, boolean, number>((v, k) => [k, v], { a: 'b' }));
expectError(RA.unzipObjWith((v, k) => [k, v], undefined));
