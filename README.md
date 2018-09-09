[![CircleCI](https://circleci.com/gh/char0n/ramda-adjunct.svg?style=svg)](https://circleci.com/gh/char0n/ramda-adjunct)
[![codecov](https://codecov.io/gh/char0n/ramda-adjunct/branch/master/graph/badge.svg)](https://codecov.io/gh/char0n/ramda-adjunct)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://char0n.github.io/ramda-adjunct/)
[![npmversion](https://badge.fury.io/js/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![npm](https://img.shields.io/npm/dm/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![devDependenciesStatus](https://david-dm.org/char0n/ramda-adjunct/dev-status.svg)](https://david-dm.org/char0n/ramda-adjunct?type=dev)
[![peerDependenciesStatus](https://david-dm.org/char0n/ramda-adjunct/peer-status.svg)](https://david-dm.org/char0n/ramda-adjunct?type=peer)
[![NSPStatus](https://nodesecurity.io/orgs/mortality/projects/70e819a7-1551-4973-801e-0315fed21068/badge)](https://nodesecurity.io/orgs/mortality/projects/70e819a7-1551-4973-801e-0315fed21068)
[![Greenkeeper badge](https://badges.greenkeeper.io/char0n/ramda-adjunct.svg)](https://greenkeeper.io/) [![startwithwhy](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://www.linkedin.com/pulse/ramda-adjunct-vladim%C3%ADr-gorej)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/char0n/ramda-adjunct/issues)
[![try on RunKit](https://img.shields.io/badge/try%20on-RunKit-brightgreen.svg?style=flat)](https://npm.runkit.com/ramda-adjunct)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct?ref=badge_shield)
[![Backers on Open Collective](https://opencollective.com/ramda-adjunct/backers/badge.svg)](#backers) 
[![Sponsors on Open Collective](https://opencollective.com/ramda-adjunct/sponsors/badge.svg)](#sponsors)
[![Join the chat at https://gitter.im/ramda-adjunct/Lobby](https://badges.gitter.im/ramda-adjunct/Lobby.svg)](https://gitter.im/ramda-adjunct/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Open Source Helpers](https://www.codetriage.com/char0n/ramda-adjunct/badges/users.svg)](https://www.codetriage.com/char0n/ramda-adjunct)

# Ramda Adjunct

Ramda Adjunct is the most popular and most comprehensive set of utilities for use with Ramda, providing a variety of useful, well tested functions with excellent documentation. 

For a full list of functions see the [**Documentation For The Latest Release**](https://char0n.github.io/ramda-adjunct).

Adjunct is a thing added to something else as a supplementary rather than an essential part. And that something is being ramda.

## Installation

```sh
npm i ramda-adjunct
```
or
```sh
yarn add ramda-adjunct
```

## Usage

### ES6

```javascript
import * as RA from 'ramda-adjunct'

RA.isArray([]);
```
or
```javascript
import { isArray } from 'ramda-adjunct';

isArray([]);
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

## Motivation

It's very common for people to create their own utils and recipes by composing Ramda's functions and creating more complex aggregate functions. Ramda Adjunct eliminates this repetitive wheel of reinvention and centralizes commonly used and useful utils.

## Benefits

### 1. Centralization

All Ramda recipes and aggregate utils not present in Ramda are centralized here. There is no more need for everybody to create their own utils in their own libraries or in each codebases.

### 2. Tests

Ramda Adjunct maintains maximal code coverage and mimics Ramda's test patterns. You can trust our functions.

### 3. Impeccable documentation

You cannot call a library great if it lacks great documentation. Ramda Adjunct generates its documentation directly from its codebase and uses patterns found in both Ramda and Lodash to document its API.

_Do you want to find out more about why this library exists ? Read this [**article**](https://www.linkedin.com/pulse/ramda-adjunct-vladim%C3%ADr-gorej)._

## Requirements

 - ramda >= 0.19.0
 - node >= 0.10.48

Ramda Adjunct is being automatically tested against node version >=6 <=9.

### Legacy builds

We are building our npm distributions using Webpack to support legacy versions of node starting from 0.10.48. Although all tests are run against node version >=4 <=8, we rely on Webpack to transpile ramda-adjunct into legacy ES5. It is also possible that our ES5 distributions run on node versions older than 0.10.48 as long as they support ES5.

## API Documentation

 [LATEST](https://char0n.github.io/ramda-adjunct),
 [2.9.0](https://char0n.github.io/ramda-adjunct/2.9.0),
 [2.8.0](https://char0n.github.io/ramda-adjunct/2.8.0),
 [2.7.0](https://char0n.github.io/ramda-adjunct/2.7.0),
 [2.6.0](https://char0n.github.io/ramda-adjunct/2.6.0),
 [2.5.0](https://char0n.github.io/ramda-adjunct/2.5.0),
 [2.4.1](https://char0n.github.io/ramda-adjunct/2.4.1),
 [2.4.0](https://char0n.github.io/ramda-adjunct/2.4.0),
 [2.3.0](https://char0n.github.io/ramda-adjunct/2.3.0),
 [2.2.0](https://char0n.github.io/ramda-adjunct/2.2.0),
 [2.1.0](https://char0n.github.io/ramda-adjunct/2.1.0),
 [2.0.0](https://char0n.github.io/ramda-adjunct/2.0.0),
 [1.19.0](https://char0n.github.io/ramda-adjunct/1.19.0),
 [1.18.0](https://char0n.github.io/ramda-adjunct/1.18.0),
 [1.17.0](https://char0n.github.io/ramda-adjunct/1.17.0),
 [1.16.0](https://char0n.github.io/ramda-adjunct/1.16.0),
 [1.15.0](https://char0n.github.io/ramda-adjunct/1.15.0),
 [1.14.0](https://char0n.github.io/ramda-adjunct/1.14.0),
 [1.13.0](https://char0n.github.io/ramda-adjunct/1.13.0),
 [1.12.0](https://char0n.github.io/ramda-adjunct/1.12.0),
 [1.11.0](https://char0n.github.io/ramda-adjunct/1.11.0),
 [1.10.2](https://char0n.github.io/ramda-adjunct/1.10.2),
 [1.10.1](https://char0n.github.io/ramda-adjunct/1.10.1),
 [1.10.0](https://char0n.github.io/ramda-adjunct/1.10.0),
 [1.9.0](https://char0n.github.io/ramda-adjunct/1.9.0),
 [1.8.1](https://char0n.github.io/ramda-adjunct/1.8.1),
 [1.8.0](https://char0n.github.io/ramda-adjunct/1.8.0),
 [1.7.0](https://char0n.github.io/ramda-adjunct/1.7.0),
 [1.6.0](https://char0n.github.io/ramda-adjunct/1.6.0),
 [1.5.0](https://char0n.github.io/ramda-adjunct/1.5.0),
 [1.4.0](https://char0n.github.io/ramda-adjunct/1.4.0),
 [1.3.2](https://char0n.github.io/ramda-adjunct/1.3.2),
 [1.3.1](https://char0n.github.io/ramda-adjunct/1.3.1),
 [1.3.0](https://char0n.github.io/ramda-adjunct/1.3.0),
 [1.2.0](https://char0n.github.io/ramda-adjunct/1.2.0),
 [1.1.0](https://char0n.github.io/ramda-adjunct/1.1.0),
 [1.0.0](https://char0n.github.io/ramda-adjunct/1.0.0),
 [0.7.0](https://char0n.github.io/ramda-adjunct/0.7.0),
 [0.6.0](https://char0n.github.io/ramda-adjunct/0.6.0),
 [0.5.1](https://char0n.github.io/ramda-adjunct/0.5.1),
 [0.4.0](https://char0n.github.io/ramda-adjunct/0.4.0),
 [0.3.0](https://char0n.github.io/ramda-adjunct/0.3.0),
 [0.2.0](https://char0n.github.io/ramda-adjunct/0.2.0),
 [0.1.0](https://char0n.github.io/ramda-adjunct/0.1.0),
 [0.0.1](https://char0n.github.io/ramda-adjunct/0.0.1)

## Development

If you want to contribute to this project, please consult the [CONTRIBUTING.md](https://github.com/char0n/ramda-adjunct/blob/master/CONTRIBUTING.md) guidelines.

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

If you use a bundler that supports tree shaking and ES2015 imports. `package.json` is automatically pre-configured to tell ES2015 `import` to import from this directory.

`es/*` - ES5 code containing ES2015 imports.

```sh
 $ npm run build:commonjs
```

If you use node to import ramda-adjunct. `package.json` is automatically pre-configured to tell `require` to import from this directory.

`lib/*` - ES5 code containing `commonjs` imports.

```sh
 $ npm run build:umd
```

The command will create three types of bundles.

`dist/RA.node.js` - ES5 compliant bundle, running on all node versions.

`dist/RA.web.js` - ES5 compliant bundle, running in browsers. Requires `ramda.js` to be required before.

`dist/RA.web.standalone.js` - ES5 compliant bundle, running in browsers. It has `ramda.js` pre-bundled.

You can always find fresh build files in circle-ci [artifacts](https://circleci.com/gh/char0n/ramda-adjunct).


## Tree shaking support

Tree shaking is a term commonly used in a JavaScript context for dead-code elimination. It relies on the static structure of ES2015's module syntax, i.e. `import` and `export`. Ramda Adjunct natively supports tree shaking thanks to the way the code is organized and its use of ES2015 imports. 

```javascript
  import * as RA from 'ramda-adjunct';

  RA.isArray([]); //=> true
```
```javascript
  import { isArray } from 'ramda-adjunct';

  isArray([]); //=> true
```

These two statements are equivalent and _only_ `isArray` should be incorporated into your bundle. You can pick and choose the functions you need without worrying about the whole library being included in your build.


## Assimilated libraries

 - [rcb](https://github.com/enten/rcb) - Ramda Cookbook implementation

## Typescript support

Although Ramda Adjunct is written in ES2016, we also support **Typescript**. When Ramda Adjunct gets imported into a Typescript project, typings are automatically imported and used.

## Author

 char0n (Vladimir Gorej)

 vladimir.gorej@gmail.com

 https://www.linkedin.com/in/vladimirgorej/

### Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/char0n/ramda-adjunct/graphs/contributors"><img src="https://opencollective.com/ramda-adjunct/contributors.svg?width=890" /></a>

## Support us

Although we love working on ramda-adjunct, we must invest our free time to make this library great. Support this project's evolution via [Open Collective](https://opencollective.com/ramda-adjunct).

[![Support via Open Collective](https://opencollective.com/ramda-adjunct/tiers/backer.svg?avatarHeight=36)](https://opencollective.com/ramda-adjunct/donate)


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/ramda-adjunct#backer)]

<a href="https://opencollective.com/ramda-adjunct#backers" target="_blank"><img src="https://opencollective.com/ramda-adjunct/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/ramda-adjunct#sponsor)]

<a href="https://opencollective.com/ramda-adjunct/sponsor/0/website" target="_blank"><img src="https://opencollective.com/ramda-adjunct/sponsor/0/avatar.svg"></a>


### License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct?ref=badge_large)
