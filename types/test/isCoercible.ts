import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isCoercible(42));
expectType<boolean>(RA.isCoercible(3.14));
expectType<boolean>(RA.isCoercible('42'));
expectType<boolean>(RA.isCoercible('hello'));
expectType<boolean>(RA.isCoercible(null));
expectType<boolean>(RA.isCoercible(undefined));
expectType<boolean>(RA.isCoercible(true));
expectType<boolean>(RA.isCoercible(false));
expectType<boolean>(RA.isCoercible({}));
expectType<boolean>(RA.isCoercible({ toString: () => '42' }));
expectType<boolean>(RA.isCoercible({ valueOf: () => 42 }));
expectType<boolean>(RA.isCoercible([]));
expectType<boolean>(RA.isCoercible(Symbol('foo')));
expectType<boolean>(RA.isCoercible(Object.create(null)));
