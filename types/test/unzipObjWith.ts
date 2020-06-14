import * as RA from 'ramda-adjunct';

RA.unzipObjWith((_, k) => [k, 1], { a: 1 }); // $ExpectType ["a"[], number[]]
RA.unzipObjWith(() => [2, 'hello'])({ a: 1 }); // $ExpectType [number[], string[]]
RA.unzipObjWith((_, k) => [k, 1], {}); // $ExpectType [never[], number[]]
RA.unzipObjWith(() => [true, 5], { a: 'b' }); // $ExpectType [boolean[], number[]]
RA.unzipObjWith((v, k) => [k, v], { a: 'b' }); // $ExpectType ["a"[], string[]]

RA.unzipObjWith(() => true, { a: 1 }); // $ExpectError
RA.unzipObjWith((v, k) => [k, v], []); // $ExpectError
RA.unzipObjWith((v, k) => [k, v], undefined); // $ExpectError
