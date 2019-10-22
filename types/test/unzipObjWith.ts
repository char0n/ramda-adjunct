import * as RA from 'ramda-adjunct';

RA.unzipObjWith((v, k) => [k, 1], { a: 1 }); // $ExpectType [string[], number[]]
RA.unzipObjWith((v, k) => [2, 'hello'])({ a: 1 }); // $ExpectType [number[], string[]]
RA.unzipObjWith((v, k) => [k, v], {}); // $ExpectType [string[], unknown[]]
RA.unzipObjWith<string, boolean, number>((v, k) => [true, 5], { a: 'b' }); // $ExpectType [boolean[], number[]]

RA.unzipObjWith((v, k) => true, { a: 1 }); // $ExpectError
RA.unzipObjWith((v, k) => [k, v], []); // $ExpectError
RA.unzipObjWith<string, boolean, number>((v, k) => [k, v], { a: 'b' }); // $ExpectError
RA.unzipObjWith((v, k) => [k, v], undefined); // $ExpectError
