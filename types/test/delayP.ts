import * as RA from 'ramda-adjunct';

RA.delayP(101); // $ExpectType Promise<undefined>
RA.delayP({ timeout: 30, value: 'Hello friends' }); // $ExpectType Promise<string>
RA.delayP({ timeout: 50, value: 42 }); // $ExpectType Promise<number>
RA.delayP({ timeout: 30 }); // $ExpectError
RA.delayP({ value: 30 }); // $ExpectError
RA.delayP('Hello world'); // $ExpectError
RA.delayP([]); // $ExpectError

RA.delayP.reject(101); // $ExpectType Promise<undefined>
RA.delayP.reject({ timeout: 30, value: 'Hello friends' }); // $ExpectType Promise<string>
RA.delayP.reject({ timeout: 50, value: 42 }); // $ExpectType Promise<number>
RA.delayP.reject({ timeout: 30 }); // $ExpectError
RA.delayP.reject({ value: 30 }); // $ExpectError
RA.delayP.reject('Hello world'); // $ExpectError
RA.delayP.reject([]); // $ExpectError
