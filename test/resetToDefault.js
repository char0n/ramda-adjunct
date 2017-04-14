import RA from '../src/index';
import eq from './shared/eq';


describe('resetToDefault', function() {
  it('tests resetting to default', function() {
    eq(RA.resetToDefault({ x: 0 }, { x: 5, y: 2 }), { x: 0, y: 2 });
  });

  it('tests currying', function() {
    eq(RA.resetToDefault({ x: 0 })({ x: 5, y: 2 }), { x: 0, y: 2 });
  });

  it('tests resetting missing props', function() {
    eq(RA.resetToDefault({ x: 0 }, {}), { x: 0 });
  });

  it('tests resetting nil value', function() {
    eq(RA.resetToDefault({ x: 0 }, null), { x: 0 });
    eq(RA.resetToDefault({ x: 0 }, undefined), { x: 0 });
  });
});
