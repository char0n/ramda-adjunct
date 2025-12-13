import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<any>(RA.invokeArgs(['abs'], [-1], Math));
expectType<any>(RA.invokeArgs(['nonexistentMethod'], [-1], Math));
expectError(RA.invokeArgs([0, 'a'], [-1], Math));
expectError(RA.invokeArgs([{}], [-1], Math));
expectError(RA.invokeArgs([0], {}, Math));
