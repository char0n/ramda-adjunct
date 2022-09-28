import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allSettledP([1, 2]); // $ExpectType Promise<SettledPromise<number>[]>
RA.allSettledP(['a', 'b']); // $ExpectType Promise<SettledPromise<string>[]>
RA.allSettledP([1, 'a']); // $ExpectType Promise<SettledPromise<string | number>[]>
RA.allSettledP([]); // $ExpectType Promise<SettledPromise<never>[]>
RA.allSettledP(customIterable); // $ExpectType Promise<SettledPromise<number>[]>
RA.allSettledP('abc'); // $ExpectType Promise<SettledPromise<string>[]>

// @ts-expect-error
RA.allSettledP({});
// @ts-expect-error
RA.allSettledP(1);
