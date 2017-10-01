import RA from '../src/index';

describe('trace', () => {
  const subj = 1;
  const message = 'message';

  it('tests logging (see output)', () => {
    RA.trace(message, subj);
    RA.trace(message)(subj);
  });
});
