import * as RA from 'ramda-adjunct';

RA.delayP('Hello world'); // $ExpectType Promise<any>
RA.delayP(101); // $ExpectType Promise<any>
RA.delayP({ timeout: 1000, value: 'Hello friends' }); // $ExpectType Promise<any>
RA.delayP({ timeout: 1000, value: 42 }); // $ExpectType Promise<any>
RA.delayP.reject('Hello world'); // $ExpectType Promise<any>
RA.delayP.reject(101); // $ExpectType Promise<any>
RA.delayP.reject({ timeout: 2000, value: 'Woww' }); // $ExpectType Promise<any>
