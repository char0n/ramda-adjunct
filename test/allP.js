import { assert } from 'chai';

import * as RA from '../src/index';


describe('allP', function() {
  context('when no arguments', function() {
    specify('throws TypeError', function(done) {
      assert.isRejected(RA.allP(), Error).notify(done);
    });
  });

  it('tests resolving list of thenable values', function(done) {
    const p1 = RA.resolveP(1);
    const p2 = RA.resolveP(2);

    assert.eventually.deepEqual(RA.allP([p1, p2]), [1, 2]).notify(done);
  });

  it('tests resolving list of mixed thenable and non-thenable values', function(done) {
    const p1 = RA.resolveP(1);
    const p2 = 2;

    assert.eventually.deepEqual(RA.allP([p1, p2]), [1, 2]).notify(done);
  });

  it('tests resolving list of rejected thenable values', function(done) {
    const p1 = RA.resolveP(1);
    const p2 = RA.rejectP(2);

    assert.isRejected(RA.allP([p1, p2]), 2).notify(done);
  });

  it('tests fail-fash behavior', function(done) {
    const p1 = new Promise((resolve) => {
      setTimeout(resolve, 10, 'one');
    });
    const p2 = new Promise((resolve) => {
      setTimeout(resolve, 20, 'two');
    });
    const p3 = new Promise((resolve) => {
      setTimeout(resolve, 30, 'three');
    });
    const p4 = new Promise((resolve) => {
      setTimeout(resolve, 40, 'four');
    });
    const p5 = new Promise((resolve, reject) => {
      reject(new Error());
    });

    assert.isRejected(RA.allP([p1, p2, p3, p4, p5]), Error).notify(done);
  });
});
