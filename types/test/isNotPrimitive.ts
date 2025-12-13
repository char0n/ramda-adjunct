import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isNotPrimitive(3));
expectType<boolean>(RA.isNotPrimitive(''));
expectType<boolean>(RA.isNotPrimitive(true));
expectType<boolean>(RA.isNotPrimitive(null));
expectType<boolean>(RA.isNotPrimitive(undefined));
expectType<boolean>(RA.isNotPrimitive(Symbol.for('')));
expectType<boolean>(RA.isNotPrimitive([]));
expectType<boolean>(RA.isNotPrimitive({}));
expectType<boolean>(RA.isNotPrimitive(() => {}));
expectType<boolean>(RA.isNotPrimitive(new Set()));

// test type narrowing
interface SomeObj {
  a: string;
}
type PrimitiveOrSomeObj = SomeObj | string;

const test: PrimitiveOrSomeObj = { a: 'hi' };

if (RA.isNotPrimitive(test)) {
  expectType<SomeObj>(test);
}
