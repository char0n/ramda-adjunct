import { test } from 'ramda';
import path from 'path';
import * as tt from 'typescript-definition-tester';


describe('Typescript definitions', function() {
  it('should compile against index.d.ts', (done) => {
    this.timeout(15000); // give typescript compiler enough time to complete
    tt.compileDirectory(
      path.join(__dirname, '..', 'src'),
      test(/index.d.ts$/),
      () => done()
    );
  });
});
