import * as RA from 'ramda-adjunct';

RA.renameKeyWith((str) => `a${str}`, 'A', { A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => `a${str}`)('A', { A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => `a${str}`)('A')({ A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => `a${str}`, 'A')({ A: 1 }); // $ExpectType object

// @ts-expect-error
RA.renameKeyWith((str) => 1, 'A', { A: 1 });
// @ts-expect-error
RA.renameKeyWith((str) => `a${str}`, 1, { A: 1 });
// @ts-expect-error
RA.renameKeyWith((str) => `a${str}`, 'A', 1);
