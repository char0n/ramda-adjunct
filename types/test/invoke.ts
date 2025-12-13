import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<any>(RA.invoke(['random'], Math));
expectType<any>(RA.invoke(['nonexistentMethod'], Math));

expectError(RA.invoke([0, 'a'], Math));
expectError(RA.invoke([{}], Math));
expectError(RA.invoke([0], Math));
