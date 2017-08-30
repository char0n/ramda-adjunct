[![CircleCI](https://circleci.com/gh/char0n/ramda-adjunct.svg?style=svg)](https://circleci.com/gh/char0n/ramda-adjunct)
[![codecov](https://codecov.io/gh/char0n/ramda-adjunct/branch/master/graph/badge.svg)](https://codecov.io/gh/char0n/ramda-adjunct)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://char0n.github.io/ramda-adjunct/)
[![npm version](https://badge.fury.io/js/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![npm](https://img.shields.io/npm/dm/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![devDependencies Status](https://david-dm.org/char0n/ramda-adjunct/dev-status.svg)](https://david-dm.org/char0n/ramda-adjunct?type=dev)
[![peerDependencies Status](https://david-dm.org/char0n/ramda-adjunct/peer-status.svg)](https://david-dm.org/char0n/ramda-adjunct?type=peer)
[![NSP Status](https://nodesecurity.io/orgs/mortality/projects/70e819a7-1551-4973-801e-0315fed21068/badge)](https://nodesecurity.io/orgs/mortality/projects/70e819a7-1551-4973-801e-0315fed21068)
[![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://www.linkedin.com/pulse/ramda-adjunct-vladim%C3%ADr-gorej)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/char0n/ramda-adjunct/issues)
[![try on RunKit](https://img.shields.io/badge/try%20on-RunKit-brightgreen.svg?style=flat)](https://npm.runkit.com/ramda-adjunct)
[![Join the chat at https://gitter.im/ramda-adjunct/Lobby](https://badges.gitter.im/ramda-adjunct/Lobby.svg)](https://gitter.im/ramda-adjunct/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Ramda Adjunct

This library is a community maintained extension of Ramda.

## Support us

Although we love working on ramda-adjunct, we must invest our free time to make this library great.
Support this project's evolution via [gratipay](https://gratipay.com/ramda-adjunct/).

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/ramda-adjunct/)

## Motivation

It seems to be very common for people to create their own utils and recipes composing
the Ramda functions and creating yet more complex aggregate functions. 
Ramda Adjunct tries to eliminate this repetitive wheel of reinvention
and centralize most aggregate utils in its codebase.

## Benefits

As a maintainers, we see three main benefits in Ramda Adjunct. 
 
### Centralization

All Ramda recipes and aggregate utils not present in Ramda are centralized here.
There is no more need for everybody to create their own utils in their own 
codebases.
 
### Tests

Creating custom aggregate utils or implementing recipes from Ramda wiki creates 
the defectiveness problem. The problem is caused by the absence of any tests.
Ramda Adjunct keeps 100% code coverage and mimics the Ramda test patterns.

### Impeccable documentation

You cannot call a library great without a great documentation. Ramda Adjnuct generates
its documentation directly from its codebase and uses patterns both found in Ramda and Lodash to document its API.

_Do you want to find out more why this library exists ? Read this [**article**](https://www.linkedin.com/pulse/ramda-adjunct-vladim%C3%ADr-gorej)._

## Requirements

 - ramda >= 0.19.0
 - node >= 0.10.48
 
Ramda Adjunct is being automatically tested against node version >=4 <=8.

### Legacy builds

We are building our npm distributions by Webpack to support also legacy versions of node starting from 0.10.48. 
Although all tests are run only against node version >=4 <=8, we rely on Webpack to transpile ramda-adjunct
into legacy ES5. It is also possible that our ES5 distributions run on node versions older than 0.10.48 as
long as they support ES5. 
 
## Installation

```sh
 $ npm i ramda-adjunct
``` 

## API Documentation

 [0.0.1](https://char0n.github.io/ramda-adjunct/0.0.1), [0.1.0](https://char0n.github.io/ramda-adjunct/0.1.0), 
 [0.2.0](https://char0n.github.io/ramda-adjunct/0.2.0), [0.3.0](https://char0n.github.io/ramda-adjunct/0.3.0),
 [0.4.0](https://char0n.github.io/ramda-adjunct/0.4.0), [0.5.1](https://char0n.github.io/ramda-adjunct/0.5.1),
 [0.6.0](https://char0n.github.io/ramda-adjunct/0.6.0), [0.7.0](https://char0n.github.io/ramda-adjunct/0.7.0),
 [1.0.0](https://char0n.github.io/ramda-adjunct/1.0.0), [1.1.0](https://char0n.github.io/ramda-adjunct/1.1.0),
 [1.2.0](https://char0n.github.io/ramda-adjunct/1.2.0), [1.3.0](https://char0n.github.io/ramda-adjunct/1.3.0),
 [1.3.1](https://char0n.github.io/ramda-adjunct/1.3.1), [1.3.2](https://char0n.github.io/ramda-adjunct/1.3.2),
 [1.4.0](https://char0n.github.io/ramda-adjunct/1.4.0), [1.5.0](https://char0n.github.io/ramda-adjunct/1.5.0),
 [1.6.0](https://char0n.github.io/ramda-adjunct/1.6.0), [1.7.0](https://char0n.github.io/ramda-adjunct/1.7.0),
 [1.8.0](https://char0n.github.io/ramda-adjunct/1.8.0), [1.8.1](https://char0n.github.io/ramda-adjunct/1.8.1), 
 [1.9.0](https://char0n.github.io/ramda-adjunct/1.9.0), [1.10.0](https://char0n.github.io/ramda-adjunct/1.10.0), 
 [1.10.1](https://char0n.github.io/ramda-adjunct/1.10.1), [1.10.2](https://char0n.github.io/ramda-adjunct/1.10.2),
 [1.11.0](https://char0n.github.io/ramda-adjunct/1.11.0), [1.12.0](https://char0n.github.io/ramda-adjunct/1.12.0),
 [1.13.0](https://char0n.github.io/ramda-adjunct/1.13.0), [1.14.0](https://char0n.github.io/ramda-adjunct/1.14.0),
 [LATEST](https://char0n.github.io/ramda-adjunct)

## Development

If you want to contribute to this project, please consult the [CONTRIBUTING.md](https://github.com/char0n/ramda-adjunct/blob/master/CONTRIBUTING.md) 
guideline.

**Obtaining project copy**

```sh
 $ git clone https://github.com/char0n/ramda-adjunct
 $ npm i 
```

**Running tests**
```sh
 $ npm run test
```

**Running linter**
```sh
 $ npm run lint
```

## Builds

```sh
 $ npm run build:es
```

If you use bundler that supports tree shaking and ES2015 imports.
`package.json` is automatically pre-configured to tell ES2015 `import` to import from this directory.

`es/*` - ES5 code containing ES2015 imports 

```sh
 $ npm run build:commonjs
```

If you use node to import ramda-adjunct.
`package.json` is automatically pre-configured to tell `require` to import from this directory.

`lib/*` - ES5 code containing `commonjs` imports


```sh
 $ npm run build:umd
```

The command will create three types of bundles.

`dist/RA.node.js` - ES5 compliant bundle, running on all node versions

`dist/RA.web.js` - ES5 compliant bundle, running in browsers. Requires `ramda.js` to be required before 

`dist/RA.web.standalone.js` - ES5 compliant bundle, running in browsers. It has `ramda.js` pre-bundled

You can always find fresh build files in circle-ci [artifacts](https://circleci.com/gh/char0n/ramda-adjunct).

## Usage

### Web browser

```html
<script src="ramda.js"></script>
<script src="RA.web.js"></script>
```
or 
```html
<script src="RA.web.standalone.js"></script>
```

Including Ramda Adjunct into HTML document exposes global variable **RA** on `window` object.

```javascript
RA.isArray([]);
```

### Node

```javascript
const RA = require('ramda-adjunct');

RA.isArray([]);
```
or
```javascript
const { isArray } = require('ramda-adjunct');

isArray([]);
``` 

## Assimilated libraries

 - [rcb](https://github.com/enten/rcb) - Ramda Cookbook implementation 

## Typescript support

Although Ramda Adjunct is written in ES2016, we support **Typescript**. When Ramda Adjunct 
gets imported into Typescript project, typings are automatically imported and used.

## Author

 char0n (Vladimir Gorej)
 
 vladimir.gorej@gmail.com
 
 https://www.linkedin.com/in/vladimirgorej/
 
### Contributors
 
 - [Tycho Grouwstra](https://github.com/tycho01)
 - [Michael Kuk](https://github.com/michaelkuk)
