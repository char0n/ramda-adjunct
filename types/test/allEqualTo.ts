import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allEqualTo(1, [1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1, []); // $ExpectType boolean
RA.allEqualTo(1)([1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1)([]); // $ExpectType boolean

// @ts-expect-error
RA.allEqualTo(1, {});
// @ts-expect-error
RA.allEqualTo(1, 'a');
// @ts-expect-error
RA.allEqualTo(1, customIterable);
