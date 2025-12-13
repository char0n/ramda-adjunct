import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.notAllUnique([1, 2, 3, 4]));
expectType<boolean>(RA.notAllUnique(['a', 'b', 'c', 'd']));
expectType<boolean>(RA.notAllUnique([1, 'b', 2, 'd']));
expectType<boolean>(RA.notAllUnique([]));

expectError(RA.notAllUnique(1));
expectError(RA.notAllUnique({}));
expectError(RA.notAllUnique(customIterable));
