import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isPrimitive(3));
expectType<boolean>(RA.isPrimitive(''));
expectType<boolean>(RA.isPrimitive(true));
expectType<boolean>(RA.isPrimitive(null));
expectType<boolean>(RA.isPrimitive(undefined));
expectType<boolean>(RA.isPrimitive(Symbol.for('')));
expectType<boolean>(RA.isPrimitive([]));
expectType<boolean>(RA.isPrimitive({}));
expectType<boolean>(RA.isPrimitive(() => {}));
expectType<boolean>(RA.isPrimitive(new Set()));

// test type narrowing
interface SomeObj {
  a: string;
}
type PrimitiveOrSomeObj = SomeObj | string;

const test: PrimitiveOrSomeObj = 'hi';

if (RA.isPrimitive(test)) {
  expectType<string>(test);
}
