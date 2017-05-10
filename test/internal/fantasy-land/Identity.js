import eq from '../../shared/eq';
import Identity from '../../../src/internal/fantasy-land/Identity';


describe('Identity', function() {
  describe('Setoid', function() {
    it('tests for reflexivity', function() {
      const a = Identity.of(1);

      eq(a.equals(a), true);
    });

    it('tests for symetry', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      eq(a.equals(b), b.equals(a));
    });

    it('tests for transitivity', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);
      const c = Identity.of(1);

      eq(a.equals(b), true);
      eq(b.equals(c), true);
      eq(a.equals(c), true);
    });

    it('tests for value of the same Setoid', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      eq(a.equals(b), true);
    });

    it('tests for value of different Setoid', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      b['@@type'] = 'unknown-type';

      eq(a.equals(b), false);
    });

    it('tests for returning a boolean', function() {
      const a = Identity.of(1);
      const b = Identity.of(2);

      eq(a.equals(a), true);
      eq(a.equals(b), false);
    });
  });
});
