import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isBlank(''));
expectType<boolean>(RA.isBlank('   '));
expectType<boolean>(RA.isBlank('\t\n'));
expectType<boolean>(RA.isBlank({}));
expectType<boolean>(RA.isBlank(null));
expectType<boolean>(RA.isBlank(undefined));
expectType<boolean>(RA.isBlank([]));
expectType<boolean>(RA.isBlank(false));

expectType<boolean>(RA.isBlank('value'));
expectType<boolean>(RA.isBlank({ foo: 'foo' }));
expectType<boolean>(RA.isBlank([1, 2, 3]));
expectType<boolean>(RA.isBlank(true));
