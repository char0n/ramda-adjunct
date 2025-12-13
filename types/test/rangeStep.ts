import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<number[]>(RA.rangeStep(1, 0, 4));
expectType<number[]>(RA.rangeStep(-1, -4, 0));
expectType<number[]>(RA.rangeStep(1, 1, 5));
expectType<number[]>(RA.rangeStep(5, 0, 20));
expectType<number[]>(RA.rangeStep(-1, 0, -4));
expectType<number[]>(RA.rangeStep(0, 1, 4));
expectType<number[]>(RA.rangeStep(1, 0, 0));

expectType<number[]>(RA.rangeStep(1, 0)(4));
expectType<number[]>(RA.rangeStep(1)(0, 4));
expectType<number[]>(RA.rangeStep(1)(0)(4));
