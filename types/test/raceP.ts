import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.raceP([1, 2]); // $ExpectType Promise<number>
RA.raceP(['a', 'b']); // $ExpectType Promise<string>
RA.raceP([1, 'a']); // $ExpectType Promise<string | number>
RA.raceP([]); // $ExpectType Promise<never>
RA.raceP(customIterable); // $ExpectType Promise<number>
RA.raceP('abc'); // $ExpectType Promise<string>

RA.raceP({}); // $ExpectError
RA.raceP(1); // $ExpectError
