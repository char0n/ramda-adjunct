import * as RA from 'ramda-adjunct';

const isEven = (n: number) => n % 2 === 0;

RA.filterIndexed((v: number, idx: number) => isEven(idx), [1, 2, 3, 4]);
