import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.overlaps(['-'], ['a']));
expectType<boolean>(RA.overlaps([2], [1]));
expectType<boolean>(RA.overlaps([2], [1, 2]));
expectType<boolean>(RA.overlaps([2, ''], [1, 2]));
expectType<boolean>(RA.overlaps([2, null], [1, 2]));
expectType<boolean>(RA.overlaps([2])([1, 2]));

expectError(RA.overlaps(1, 2));
expectError(RA.overlaps('#', '10'));
expectError(RA.overlaps(['#'], '10'));
expectError(RA.overlaps([undefined], undefined));
expectError(RA.overlaps(undefined, [undefined]));
expectError(RA.overlaps(null, [undefined]));
expectError(RA.overlaps(() => {}, [undefined]));
