import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.anyP([1, 2]); // $ExpectType Promise<number>
RA.anyP(['a', 'b']); // $ExpectType Promise<string>
RA.anyP([1, 'a']); // $ExpectType Promise<string | number>
RA.anyP([]); // $ExpectType Promise<never>
RA.anyP(customIterable); // $ExpectType Promise<number>

RA.anyP({}); // $ExpectError
RA.anyP(1); // $ExpectError

// alias
RA.firstP([1, 2]); // $ExpectType Promise<number>
RA.firstP(['a', 'b']); // $ExpectType Promise<string>
RA.firstP([1, 'a']); // $ExpectType Promise<string | number>
RA.firstP([]); // $ExpectType Promise<never>
RA.firstP(customIterable); // $ExpectType Promise<number>

RA.firstP({}); // $ExpectError
RA.firstP(1); // $ExpectError
