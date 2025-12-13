import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.isPrototypeOf(Object, {}));
expectType<boolean>(RA.isPrototypeOf(Array, []));
expectType<boolean>(RA.isPrototypeOf(Array, []));
expectType<boolean>(RA.isPrototypeOf(Array, () => {}));
expectType<boolean>(RA.isPrototypeOf(Function, () => {}));
expectType<boolean>(RA.isPrototypeOf(Object, () => {}));
expectType<boolean>(RA.isPrototypeOf(RegExp, /my regex/gi));

expectType<boolean>(RA.isPrototypeOf(Object)({}));
expectType<boolean>(RA.isPrototypeOf(Array)([]));

expectError(RA.isPrototypeOf(null, {}));
