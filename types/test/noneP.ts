import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.noneP([Promise.resolve(1), 2, RA.resolveP(3)]); // $ExpectType Promise<number[]>
RA.noneP([Promise.reject<number>(1)]); // $ExpectType Promise<number[]>
RA.noneP(['a', 'b']); // $ExpectType Promise<string[]>
RA.noneP([1, 'a']); // $ExpectType Promise<(string | number)[]>
RA.noneP([]); // $ExpectType Promise<never[]>
RA.noneP(customIterable); // $ExpectType Promise<number[]>
RA.noneP('abc'); // $ExpectType Promise<string[]>

// @ts-expect-error
RA.noneP({});
// @ts-expect-error
RA.noneP(1);
