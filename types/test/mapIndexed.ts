import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<number[]>(RA.mapIndexed<number, number>((x) => x + 1)([1, 2, 3, 4]));
expectType<number[]>(RA.mapIndexed<number, number>((x) => x + 1, [1, 2, 3, 4]));
