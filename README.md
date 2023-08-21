[![Node.js workflow](https://github.com/char0n/ramda-adjunct/actions/workflows/nodejs.yaml/badge.svg)](https://github.com/char0n/ramda-adjunct/actions)
[![codecov](https://codecov.io/gh/char0n/ramda-adjunct/branch/master/graph/badge.svg)](https://codecov.io/gh/char0n/ramda-adjunct)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://char0n.github.io/ramda-adjunct/)
[![npmversion](https://badge.fury.io/js/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![npm](https://img.shields.io/npm/dm/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![](https://data.jsdelivr.com/v1/package/npm/ramda-adjunct/badge)](https://www.jsdelivr.com/package/npm/ramda-adjunct)
[![Dependabot enabled](https://img.shields.io/badge/Dependabot-enabled-blue.svg)](https://dependabot.com/)
[![startwithwhy](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://www.linkedin.com/pulse/ramda-adjunct-vladim%C3%ADr-gorej)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/char0n/ramda-adjunct/issues)
[![try on RunKit](https://img.shields.io/badge/try%20on-RunKit-brightgreen.svg?style=flat)](https://npm.runkit.com/ramda-adjunct)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct?ref=badge_shield)
[![Backers on Open Collective](https://opencollective.com/ramda-adjunct/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/ramda-adjunct/sponsors/badge.svg)](#sponsors)
[![Join the chat at https://gitter.im/ramda-adjunct/Lobby](https://badges.gitter.im/ramda-adjunct/Lobby.svg)](https://gitter.im/ramda-adjunct/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Open Source Helpers](https://www.codetriage.com/char0n/ramda-adjunct/badges/users.svg)](https://www.codetriage.com/char0n/ramda-adjunct)
[![Tidelift](https://tidelift.com/badges/package/npm/ramda-adjunct)](https://tidelift.com/subscription/pkg/npm-ramda-adjunct?utm_source=npm-ramda-adjunct&utm_medium=referral&utm_campaign=readme)

# Ramda Adjunct [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Start%20your%20functional%20programming%20journey%20in%20JavaScript%20with%20ramda%20%2B%20ramda-adjunct&url=https%3A%2F%2Fgithub.com%2Fchar0n%2Framda-adjunct&via=vladimirgorej&hashtags=functional,javascript,ramda,utilities,addons)

<p align="center"><img src="https://raw.githubusercontent.com/char0n/ramda-adjunct/master/logo.jpg" width="250" height="200" /></p>


Ramda Adjunct is the most popular and most comprehensive set of functional utilities for use with Ramda, providing a variety of useful, well tested functions with excellent documentation.

For a full list of functions see the [**Documentation For The Latest Release**](https://char0n.github.io/ramda-adjunct).

Adjunct is a thing added to something else as a supplementary rather than an essential part. And that something is being ramda.

Follow Ramda Adjunct on [**medium.com/ramda-adjunct**](https://medium.com/ramda-adjunct) to read latest news and
articles about the library.

<table>
  <tr>
    <td align="right" valign="middle">
        <img src="https://cdn2.hubspot.net/hubfs/4008838/website/logos/logos_for_download/Tidelift_primary-shorthand-logo.png" alt="Tidelift" width="60" />
      </td>
      <td valign="middle">
        <a href="https://tidelift.com/subscription/pkg/npm-ramda-adjunct?utm_source=npm-ramda-adjunct&utm_medium=referral&utm_campaign=readme">
            Get professionally supported ramda-adjunct with Tidelift Subscription.
        </a>
      </td>
  </tr>
</table>

### Getting Started

### Installation

```sh
npm i ramda-adjunct
```
or
```sh
yarn add ramda-adjunct
```

### Usage

#### ES6

```javascript
import * as RA from 'ramda-adjunct'

RA.isArray([]);
```
or
```javascript
import { isArray } from 'ramda-adjunct';

isArray([]);
```

#### Node

```javascript
const RA = require('ramda-adjunct');

RA.isArray([]);
```
or
```javascript
const { isArray } = require('ramda-adjunct');

isArray([]);
```

#### Web browser

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

 - ramda >= 0.29.0
 - node >= 0.10.48

Ramda Adjunct is being automatically tested against all LTS and Current Node.js versions.

### Legacy builds

We are building our npm distributions using Webpack/Babel to support legacy versions of node starting from 0.10.48.
Although all tests are run against all LTS and Current Node.js versions, we rely on Webpack/Babel to transpile ramda-adjunct into legacy ES5.
It is also possible that our ES5 distributions run on node versions older than 0.10.48 as long as they support ES5.

## API Documentation

 [LATEST](https://char0n.github.io/ramda-adjunct),
 [PREVIOUS](https://char0n.github.io/ramda-adjunct/4.1.0),
 [ALL VERSIONS](./VERSIONS.md)

## Wrote about us

- [Ramda — R.adjust](https://medium.com/@kyletilman/ramda-r-adjust-b69a575274fa)
- [Refactoring JavaScript: Imperative to Functional](https://www.derrickbeining.com/2018/07/04/refactoring-javascript-imperative-to-functional/)
- [Functional Programming Unit Testing in Node – Part 5](http://jessewarden.com/2018/06/functional-programming-unit-testing-in-node-part-5.html)
- [30 Seconds of Code: Rename MANY Object Keys in Javascript](https://medium.com/front-end-weekly/30-seconds-of-code-rename-many-object-keys-in-javascript-268f279c7bfa)
- [Functional Javascript with Ramda](https://www.youtube.com/watch?v=ZP04zdDHPgk) associated with [slides](https://slides.com/jettdurham/functional-js#/)
- [What's Ramda equivalent to underscore.js 'compact'?](https://stackoverflow.com/questions/29900130/whats-ramda-equivalent-to-underscore-js-compact)
- [Ramda Adjunct](https://medium.com/ramda-adjunct/ramda-adjunct-6932c20e6b21)
- [Lifting functions into monadic Context in JavaScript](https://www.linkedin.com/pulse/lifting-functions-monadic-context-javascript-vladim%C3%ADr-gorej/)
- [Folding Promises in JavaScript](https://www.linkedin.com/pulse/folding-promises-javascript-vladim%C3%ADr-gorej/)
- [Monad transformers in JavaScript](https://www.linkedin.com/pulse/monad-transformers-javascript-vladim%C3%ADr-gorej/)
- [Functional lenses in JavaScript](https://www.linkedin.com/pulse/functional-lenses-javascript-vladim%C3%ADr-gorej/)
- [Functional lenses in JavaScript - Isos](https://www.linkedin.com/pulse/functional-lenses-javascript-isos-vladim%C3%ADr-gorej/)
- [Functional lenses in JavaScript - Traversables](https://www.linkedin.com/pulse/functional-lenses-javascript-traversables-vladim%C3%ADr-gorej/)
- [Using JavaScript Generators to yield Promises](https://www.linkedin.com/pulse/using-javascript-generators-yield-promises-vladim%C3%ADr-gorej/)
- [Integrating React Native navigators](https://blog.inspeerity.com/react-native/integrating-react-native-navigators/)
- [Ramda Adjunct Changelog articles](https://medium.com/ramda-adjunct)
- [Ramda and React](https://hint.io/blog/react-and-ramda)

## Contributing

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

**Running tests in browser**
```sh
 $ npm run test:web
```

**Running compatibility tests for supported ramda versions**
```sh
 $ npm run test:ramda
```

**Running code coverage numbers**
```sh
 $ npm run coverage
```

**Running linter**

We're using [eslint](https://eslint.org/) and [airbnb codestyle](https://github.com/airbnb/javascript) rules with [prettier](https://prettier.io/) integrated as an eslint plugin.

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

You can always find fresh build files in exposed as artifacts of GitHub Actions.


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

Although we love working on ramda-adjunct, we must invest our free time to make this library great. Support this project's evolution via [Open Collective](https://opencollective.com/ramda-adjunct) or [Github Sponsors](https://github.com/sponsors/char0n).

[![Support via Open Collective](https://opencollective.com/ramda-adjunct/tiers/backer.svg?avatarHeight=36)](https://opencollective.com/ramda-adjunct/donate)


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/ramda-adjunct#backer)]

<a href="https://opencollective.com/ramda-adjunct#backers" target="_blank"><img src="https://opencollective.com/ramda-adjunct/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/ramda-adjunct#sponsor)]

<a href="https://opencollective.com/ramda-adjunct/sponsor/0/website" target="_blank"><img src="https://opencollective.com/ramda-adjunct/sponsor/0/avatar.svg"></a>


### License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchar0n%2Framda-adjunct?ref=badge_large)
