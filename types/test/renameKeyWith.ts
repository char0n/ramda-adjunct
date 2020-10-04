import * as RA from 'ramda-adjunct';

RA.renameKeyWith((str) => 'a' + str, 'A', { A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => 'a' + str)('A', { A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => 'a' + str)('A')({ A: 1 }); // $ExpectType object
RA.renameKeyWith((str) => 'a' + str, 'A')({ A: 1 }); // $ExpectType object
