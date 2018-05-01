import { uniq, length, lte, __, pipe } from 'ramda';

/* eslint-disable */
/**
  * Checks that all elemnets in a list are the same
  *
  *
  *
  * @func allEqual
  * @memberOf RA
  * @category List
  * @sig [Iterable a] -> boolean
  * @params {Iterable.<*>}

  * @example
  *
  * allEqual([ 1, 2, 3, 4 ]); //=> false
  * allEqual([ 1, 1, 1, 1 ]); //=> true
  */
/* eslint-enable */
const allEqual = pipe(uniq, length, lte(__, 1));

export default allEqual;
