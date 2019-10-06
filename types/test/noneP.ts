import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.noneP([1, 2]); // $ExpectType Promise<number[]>
RA.noneP(['a', 'b']); // $ExpectType Promise<string[]>
RA.noneP([1, 'a']); // $ExpectType Promise<(string | number)[]>
RA.noneP([]); // $ExpectType Promise<never[]>
RA.noneP(customIterable); // $ExpectType Promise<number[]>
RA.noneP('abc'); // $ExpectType Promise<string[]>

RA.noneP({}); // $ExpectError
RA.noneP(1); // $ExpectError
