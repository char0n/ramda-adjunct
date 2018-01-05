import * as R from 'ramda';
import * as RA from '../src/index';
import eq from './shared/eq';


describe('seq', function() {
  it('tests calling uncurried', function() {
    eq(RA.seq([RA.noop], 3), 3);
  });

  it('tests calling curried', function() {
    eq(RA.seq([RA.noop])(3), 3);
  });

  it('tests ordered evaluation', function() {
    let foo = 2;

    const divide = (x) => { foo /= x };
    const multiply = (x) => { foo *= x };

    const seqed = RA.seq([multiply, divide])(3);

    eq(seqed, 3);
    eq(foo, 2);
  });

  it('tests transducing', function() {
    const transducer = R.compose(R.map(R.inc), RA.seq([R.inc]), R.filter(RA.isEven));
    const transduced = R.transduce(transducer, R.flip(R.append), [], R.range(0, 10));

    eq(transduced, [2, 4, 6, 8, 10]);
  });

  it('tests an alias', function() {
    eq(RA.sequencing([RA.noop])(0), 0);
  });
});
