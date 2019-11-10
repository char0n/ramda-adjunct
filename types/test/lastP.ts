import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.lastP([1, 2]); // $ExpectType Promise<number>
RA.lastP(['a', 'b']); // $ExpectType Promise<string>
RA.lastP([1, 'a']); // $ExpectType Promise<string | number>
RA.lastP([]); // $ExpectType Promise<never>
RA.lastP(customIterable); // $ExpectType Promise<number>

RA.lastP({}); // $ExpectError
RA.lastP(1); // $ExpectError
