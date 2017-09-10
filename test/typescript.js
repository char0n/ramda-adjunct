import { test } from 'ramda';
import path from 'path';
import * as tt from 'typescript-definition-tester';


describe('Typescript definitions', function() {
  beforeEach(function() {
    this.timeout(15000);
  });

  it('should compile against index.d.ts', (done) => {
    tt.compileDirectory(
      path.join(__dirname, '..', 'src'),
      test(/index.d.ts$/),
      () => done()
    );
  });
});
