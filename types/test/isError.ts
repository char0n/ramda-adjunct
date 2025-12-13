import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isError(3));
expectType<boolean>(RA.isError(null));
expectType<boolean>(RA.isError(undefined));
expectType<boolean>(RA.isError('hi'));
expectType<boolean>(RA.isError([1, 2, 3]));
expectType<boolean>(RA.isError({ key: 'value' }));
expectType<boolean>(RA.isError(new Set([1, 8, -7])));
expectType<boolean>(RA.isError(() => {}));
expectType<boolean>(RA.isError(new Error()));
expectType<boolean>(RA.isError(new SyntaxError()));
expectType<boolean>(RA.isError(new TypeError()));
expectType<boolean>(RA.isError(new ReferenceError()));
expectType<boolean>(RA.isError(new RangeError()));
