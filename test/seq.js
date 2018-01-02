import { append, compose, filter, flip, inc, map, range, transduce } from 'ramda';
import { isEven, noop, seq, sequencing } from '../src/index';
import eq from './shared/eq';


describe('seq', function() {
  it('tests calling uncurried', function() {
    eq(seq([noop], 3), 3);
  });

  it('tests calling curried', function() {
    eq(seq([noop])(3), 3);
  });

  it('tests ordered evaluation', function() {
    let foo = 2;

    const divide = (x) => { foo /= x };
    const multiply = (x) => { foo *= x };

    const seqed = seq([multiply, divide])(3);

    eq(seqed, 3);
    eq(foo, 2);
  });

  it('tests transducing', function() {
    const transducer = compose(map(inc), seq([inc]), filter(isEven));
    const transduced = transduce(transducer, flip(append), [], range(0, 10));

    eq(transduced, [2, 4, 6, 8, 10]);
  });

  it('tests exported alias', function() {
    eq(sequencing([noop])(0), 0);
  });
});
