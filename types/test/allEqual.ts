import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.allEqual([1, 2, 3, 4]));
expectType<boolean>(RA.allEqual(['a', 'b', 'c', 'd']));
expectType<boolean>(RA.allEqual([1, 'b', 2, 'd']));
expectType<boolean>(RA.allEqual([]));
expectError(RA.allEqual(customIterable));
