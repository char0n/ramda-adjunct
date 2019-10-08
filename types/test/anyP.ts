import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.anyP([1, 2]); // $ExpectType Promise<number>
RA.anyP(['a', 'b']); // $ExpectType Promise<string>
RA.anyP([1, 'a']); // $ExpectType Promise<string | number>
RA.anyP([]); // $ExpectType Promise<never>
RA.anyP(customIterable); // $ExpectType Promise<number>

RA.anyP({}); // $ExpectError
RA.anyP(1); // $ExpectError
