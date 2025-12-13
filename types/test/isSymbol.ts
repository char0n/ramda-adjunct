import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isSymbol(undefined));
expectType<boolean>(RA.isSymbol(null));
expectType<boolean>(RA.isSymbol(() => {}));
expectType<boolean>(RA.isSymbol(NaN));
expectType<boolean>(RA.isSymbol(true));
expectType<boolean>(RA.isSymbol('string'));
expectType<boolean>(RA.isSymbol(1));
expectType<boolean>(RA.isSymbol(Symbol('any')));
expectType<boolean>(RA.isSymbol(Symbol(1)));
expectType<boolean>(RA.isSymbol(Symbol()));
expectType<boolean>(RA.isSymbol(Symbol.iterator));
