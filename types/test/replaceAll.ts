import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<string>(RA.replaceAll('ab', 'ef', 'ab cd ab cd ab cd'));
expectType<string>(RA.replaceAll('', 'x', 'xxx'));
expectType<string>(RA.replaceAll(/x/g, 'v', 'xxx'));
