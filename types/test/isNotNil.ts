import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

interface Test {
  a: number | undefined;
  b: number | null;
  /* tslint:disable-next-line:no-null-undefined-union null or undefined is the accurate type here */
  c: number | null | undefined;
}

const obj: Test = { a: 1, b: 1, c: 1 };

if (RA.isNotNil(obj.a)) {
  expectType<number>(obj.a);
}

if (RA.isNotNil(obj.b)) {
  expectType<number>(obj.b);
}

if (RA.isNotNil(obj.c)) {
  expectType<number>(obj.c);
}

expectType<boolean>(RA.isNotNil('string'));
expectType<boolean>(RA.isNotNil(1));
expectType<boolean>(RA.isNotNil([]));
expectType<boolean>(RA.isNotNil({}));
expectType<boolean>(RA.isNotNil(null));
expectType<boolean>(RA.isNotNil(undefined));
