import * as RA from 'ramda-adjunct';

RA.delayP(101); // $ExpectType Promise<undefined>
RA.delayP({ timeout: 30, value: 'Hello friends' }); // $ExpectType Promise<string>
RA.delayP({ timeout: 50, value: 42 }); // $ExpectType Promise<number>
// @ts-expect-error
RA.delayP({ timeout: 30 });
// @ts-expect-error
RA.delayP({ value: 30 });
// @ts-expect-error
RA.delayP('Hello world');
// @ts-expect-error
RA.delayP([]);

RA.delayP.reject(101); // $ExpectType Promise<undefined>
RA.delayP.reject({ timeout: 30, value: 'Hello friends' }); // $ExpectType Promise<string>
RA.delayP.reject({ timeout: 50, value: 42 }); // $ExpectType Promise<number>
// @ts-expect-error
RA.delayP.reject({ timeout: 30 });
// @ts-expect-error
RA.delayP.reject({ value: 30 });
// @ts-expect-error
RA.delayP.reject('Hello world');
// @ts-expect-error
RA.delayP.reject([]);
