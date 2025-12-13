import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.allUnique([1, 2, 3, 4]));
expectType<boolean>(RA.allUnique(['a', 'b', 'c', 'd']));
expectType<boolean>(RA.allUnique([1, 'b', 2, 'd']));
expectType<boolean>(RA.allUnique([]));

expectError(RA.allUnique(1));
expectError(RA.allUnique({}));
expectError(RA.allUnique(customIterable));
