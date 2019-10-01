import * as RA from 'ramda-adjunct';

RA.isSymbol(undefined); // $ExpectType boolean
RA.isSymbol(null); // $ExpectType boolean
RA.isSymbol(() => {}); // $ExpectType boolean
RA.isSymbol(NaN); // $ExpectType boolean
RA.isSymbol(true); // $ExpectType boolean
RA.isSymbol('string'); // $ExpectType boolean
RA.isSymbol(1); // $ExpectType boolean
RA.isSymbol(Symbol('any')); // $ExpectType boolean
RA.isSymbol(Symbol(1)); // $ExpectType boolean
RA.isSymbol(Symbol()); // $ExpectType boolean
RA.isSymbol(Symbol.iterator); // $ExpectType boolean
