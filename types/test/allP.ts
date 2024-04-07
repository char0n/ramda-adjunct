import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allP([1, 2]); // $ExpectType Promise<number[]>
RA.allP(['a', 'b']); // $ExpectType Promise<string[]>
RA.allP([1, 'a']); // $ExpectType Promise<(string | number)[]>
RA.allP([]); // $ExpectType Promise<never[]>
RA.allP(customIterable); // $ExpectType Promise<number[]>
RA.allP('abc'); // $ExpectType Promise<string[]>
RA.allP([Promise.resolve(1), Promise.resolve(2)]); // $ExpectType Promise<number[]>

// @ts-expect-error
RA.allP({});
// @ts-expect-error
RA.allP(1);
