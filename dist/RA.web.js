(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("R"));
	else if(typeof define === 'function' && define.amd)
		define(["R"], factory);
	else if(typeof exports === 'object')
		exports["RA"] = factory(require("R"));
	else
		root["RA"] = factory(root["R"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isFunction2 = __webpack_require__(42);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isGeneratorFunction = __webpack_require__(6);

var _isGeneratorFunction2 = _interopRequireDefault(_isGeneratorFunction);

var _isAsyncFunction = __webpack_require__(4);

var _isAsyncFunction2 = _interopRequireDefault(_isAsyncFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is `Function`
 *
 * @func isFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotFunction|isNotFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isFunction(function test() { }); //=> true
 * RA.isFunction(function* test() { }); //=> true
 * RA.isFunction(async function test() { }); //=> true
 * RA.isFunction(() => {}); //=> true
 * RA.isFunction(null); //=> false
 * RA.isFunction('abc'); //=> false
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.anyPass)([_isFunction3.default, _isGeneratorFunction2.default, _isAsyncFunction2.default]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNull = __webpack_require__(7);

var _isNull2 = _interopRequireDefault(_isNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is complement of `null`
 *
 * @func isNotNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNull|isNull}
 * @example
 *
 * RA.isNotNull(1); //=> true
 * RA.isNotNull(undefined); //=> true
 * RA.isNotNull(null); //=> false
 */
exports.default = (0, _ramda.complement)(_isNull2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber2 = __webpack_require__(43);

var _isNumber3 = _interopRequireDefault(_isNumber2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if value is a `Number` primitive or object
 *
 * @func isNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNumber|isNotNumber}
 * @example
 *
 * RA.isNumber(5); // => true
 * RA.isNumber(Number.MAX_VALUE); // => true
 * RA.isNumber(-Infinity); // => true
 * RA.isNumber('5'); // => false
 */
exports.default = _isNumber3.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint-disable max-len */
/**
 * Checks if input value is `Async Function`
 *
 * @func isAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isNotAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isAsyncFunction(async function test() { }); //=> true
 * RA.isAsyncFunction(null); //=> false
 * RA.isAsyncFunction(function test() { }); //=> false
 * RA.isAsyncFunction(() => {}); //=> false
 */
/* eslint-enable max-len */

exports.default = function (val) {
  return Object.prototype.toString.call(val) === '[object AsyncFunction]';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _Number = __webpack_require__(38);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is a finite `Number`.
 *
 *
 * @func isFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotFinite|isNotFinite}
 * @example
 *
 * RA.isFinite(Infinity); //=> false
 * RA.isFinite(NaN); //=> false
 * RA.isFinite(-Infinity); //=> false
 *
 * RA.isFinite(0); // true
 * RA.isFinite(2e64); // true
 *
 * RA.isFinite('0');  // => false
 *                    // would've been true with global isFinite('0')
 * RA.isFinite(null); // => false
 *                    // would've been true with global isFinite(null)
 */
exports.default = (0, _ramda.or)(Number.isFinite, _Number2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNotNull = __webpack_require__(2);

var _isNotNull2 = _interopRequireDefault(_isNotNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneratorFunction = null;
try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func
} catch (e) {} // eslint-disable-line no-empty


/* eslint-disable max-len */
/**
 * Checks if input value is `Generator Function`
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */
/* eslint-enable max-len */

exports.default = function (val) {
  var toStringCheck = Object.prototype.toString.call(val) === '[object AsyncFunction]';
  var legacyConstructorCheck = (0, _isNotNull2.default)(GeneratorFunction) && val instanceof GeneratorFunction;

  return (0, _ramda.or)(toStringCheck, legacyConstructorCheck);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Checks if input value is `null`
 *
 * @func isNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNull|isNotNull}
 * @example
 *
 * RA.isNull(1); //=> false
 * RA.isNull(undefined); //=> false
 * RA.isNull(null); //=> true
 */
exports.default = (0, _ramda.equals)(null);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNotNull = __webpack_require__(2);

var _isNotNull2 = _interopRequireDefault(_isNotNull);

var _isOfTypeObject = __webpack_require__(18);

var _isOfTypeObject2 = _interopRequireDefault(_isOfTypeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObjectLike|isNotObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObjectLike({}); //=> true
 * RA.isObjectLike([]); //=> true
 * RA.isObjectLike(() => {}); //=> false
 * RA.isObjectLike(null); //=> false
 * RA.isObjectLike(undefined); //=> false
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.both)(_isNotNull2.default, _isOfTypeObject2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = __webpack_require__(41);

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is `Array`
 *
 * @func isArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */
exports.default = _isArray3.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Checks if input value is `Boolean`
 *
 * @func isBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotBoolean|isNotBoolean}
 * @example
 *
 * RA.isBoolean(false); //=> true
 * RA.isBoolean(true); //=> true
 * RA.isBoolean(null); //=> false
 */
exports.default = (0, _ramda.is)(Boolean);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Checks if value is `Date` object
 *
 * @func isDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotDate|isNotDate}
 * @example
 *
 * RA.isDate(new Date()); //=> true
 * RA.isDate('1997-07-16T19:20+01:00'); //=> false
 */
exports.default = (0, _ramda.is)(Date);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _Number = __webpack_require__(39);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is a an `integer`.
 *
 *
 * @func isInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotInteger|isNotInteger}
 * @example
 *
 * RA.isInteger(0); //=> true
 * RA.isInteger(1); //=> true
 * RA.isInteger(-100000); //=> true
 *
 * RA.isInteger(0.1);       //=> false
 * RA.isInteger(Math.PI);   //=> false
 *
 * RA.isInteger(NaN);       //=> false
 * RA.isInteger(Infinity);  //=> false
 * RA.isInteger(-Infinity); //=> false
 * RA.isInteger('10');      //=> false
 * RA.isInteger(true);      //=> false
 * RA.isInteger(false);     //=> false
 * RA.isInteger([1]);       //=> false
 */
exports.default = (0, _ramda.or)(Number.isInteger, _Number2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _Number = __webpack_require__(40);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is `NaN` and its type is `Number`.
 * It is a more robust version of the original, global isNaN().
 *
 *
 * @func isNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNaN|isNotNaN}
 * @example
 *
 * RA.isNaN(NaN); // => true
 * RA.isNaN(Number.NaN); // => true
 * RA.isNaN(0 / 0); // => true
 *
 * // e.g. these would have been true with global isNaN().
 * RA.isNaN('NaN'); // => false
 * RA.isNaN(undefined); // => false
 * RA.isNaN({}); // => false
 * RA.isNaN('blabla'); // => false
 *
 * RA.isNaN(true); // => false
 * RA.isNaN(null); // => false
 * RA.isNaN(37); // => false
 * RA.isNaN('37'); // => false
 * RA.isNaN('37.37'); // => false
 * RA.isNaN(''); // => false
 * RA.isNaN(' '); // => false
 */
exports.default = (0, _ramda.or)(Number.isNaN, _Number2.default);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNotNull = __webpack_require__(2);

var _isNotNull2 = _interopRequireDefault(_isNotNull);

var _isFunction = __webpack_require__(1);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isOfTypeObject = __webpack_require__(18);

var _isOfTypeObject2 = _interopRequireDefault(_isOfTypeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is language type of `Object`
 *
 * @func isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObject|isNotObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObject({}); //=> true
 * RA.isObject([]); //=> true
 * RA.isObject(() => {}); //=> true
 * RA.isObject(null); //=> false
 * RA.isObject(undefined); //=> false
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.both)(_isNotNull2.default, (0, _ramda.anyPass)([_isOfTypeObject2.default, _isFunction2.default]));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject2 = __webpack_require__(44);

var _isObject3 = _interopRequireDefault(_isObject2);

var _ramda = __webpack_require__(0);

var _isNull = __webpack_require__(7);

var _isNull2 = _interopRequireDefault(_isNull);

var _isObjectLike = __webpack_require__(8);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isFunction = __webpack_require__(1);

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObjectConstructor = (0, _ramda.pipe)(_ramda.toString, (0, _ramda.equals)((0, _ramda.toString)(Object)));
var hasObjectConstructor = (0, _ramda.pathSatisfies)((0, _ramda.both)(_isFunction2.default, isObjectConstructor), ['constructor']);

/* eslint-disable max-len */
/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`)
 *
 * @func isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotPlainObject|isNotPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObject(new Bar()); //=> false
 * RA.isPlainObject({ prop: 'value' }); //=> true
 * RA.isPlainObject(['a', 'b', 'c']); //=> false
 * RA.isPlainObject(Object.create(null); //=> true
 * RA.isPlainObject(new Object()); //=> true
 */
/* eslint-enable max-len */

exports.default = function (val) {
  if (!(0, _isObjectLike2.default)(val) || !(0, _isObject3.default)(val)) {
    return false;
  }

  var proto = Object.getPrototypeOf(val);

  if ((0, _isNull2.default)(proto)) {
    return true;
  }

  return hasObjectConstructor(proto);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString2 = __webpack_require__(45);

var _isString3 = _interopRequireDefault(_isString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is `String`
 *
 * @func isString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotString|isNotString}
 * @example
 *
 * RA.isString('abc'); //=> true
 * RA.isString(1); //=> false
 */
exports.default = _isString3.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Checks if input value is `undefined`
 *
 * @func isUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */
exports.default = (0, _ramda.equals)(undefined);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (val) {
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`
 *
 * @func isNilOrEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}, {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNilOrEmpty([1, 2, 3]); //=> false
 * RA.isNilOrEmpty([]); //=> true
 * RA.isNilOrEmpty(''); //=> true
 * RA.isNilOrEmpty(null); //=> true
 * RA.isNilOrEmpty(undefined): //=> true
 * RA.isNilOrEmpty({}); //=> true
 * RA.isNilOrEmpty({length: 0}); //=> false
 */
exports.default = (0, _ramda.anyPass)([_ramda.isNil, _ramda.isEmpty]);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isArray = __webpack_require__(9);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is complement of `Array`
 *
 * @func isNotArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isArray|isArray}
 * @example
 *
 * RA.isNotArray([]); //=> false
 * RA.isNotArray(null); //=> true
 * RA.isNotArray({}); //=> true
 */
exports.default = (0, _ramda.complement)(_isArray2.default);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func isNotArrayLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isArrayLike|isArrayLike}
 * @example
 *
 * RA.isNotArrayLike([]); //=> false
 * RA.isNotArrayLike(true); //=> true
 * RA.isNotArrayLike({}); //=> true
 * RA.isNotArrayLike({length: 10}); //=> true
 * RA.isNotArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> false
 */
exports.default = (0, _ramda.complement)(_ramda.isArrayLike);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isAsyncFunction = __webpack_require__(4);

var _isAsyncFunction2 = _interopRequireDefault(_isAsyncFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Async Function`
 *
 * @func isNotAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotAsyncFunction(async function test() { }); //=> false
 * RA.isNotAsyncFunction(null); //=> true
 * RA.isNotAsyncFunction(function test() { }); //=> true
 * RA.isNotAsyncFunction(() => {}); //=> true
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isAsyncFunction2.default);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isBoolean = __webpack_require__(10);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is complement of `Boolean`
 *
 * @func isNotBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isBoolean|isBoolean}
 * @example
 *
 * RA.isNotBoolean(false); //=> false
 * RA.isNotBoolean(true); //=> false
 * RA.isNotBoolean(null); //=> true
 */
exports.default = (0, _ramda.complement)(_isBoolean2.default);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isDate = __webpack_require__(11);

var _isDate2 = _interopRequireDefault(_isDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if value is complement of `Date` object
 *
 * @func isNotDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isDate|isDate}
 * @example
 *
 * RA.isNotDate(new Date()); //=> false
 * RA.isNotDate('1997-07-16T19:20+01:00'); //=> true
 */
exports.default = (0, _ramda.complement)(_isDate2.default);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Returns true if the given value is not its type's empty value; `false` otherwise.
 *
 * @func isNotEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}
 * @example
 *
 * RA.isNotEmpty([1, 2, 3]); //=> true
 * RA.isNotEmpty([]); //=> false
 * RA.isNotEmpty(''); //=> false
 * RA.isNotEmpty(null); //=> true
 * RA.isNotEmpty(undefined): //=> true
 * RA.isNotEmpty({}); //=> false
 * RA.isNotEmpty({length: 0}); //=> true
 */
exports.default = (0, _ramda.complement)(_ramda.isEmpty);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isFinite2 = __webpack_require__(5);

var _isFinite3 = _interopRequireDefault(_isFinite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is complement of finite `Number`.
 *
 *
 * @func isNotFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFinite|isFinite}
 * @example
 *
 * RA.isNotFinite(Infinity); //=> true
 * RA.isNotFinite(NaN); //=> true
 * RA.isNotFinite(-Infinity); //=> true
 *
 * RA.isNotFinite(0); // false
 * RA.isNotFinite(2e64); // false
 *
 * RA.isNotFinite('0');  // => true
 * RA.isNotFinite(null); // => true
 */
exports.default = (0, _ramda.complement)(_isFinite3.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isFunction = __webpack_require__(1);

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Function`
 *
 * @func isNotFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotFunction(function test() { }); //=> false
 * RA.isNotFunction(function* test() { }); //=> false
 * RA.isNotFunction(async function test() { }); //=> false
 * RA.isNotFunction(() => {}); //=> false
 * RA.isNotFunction(null); //=> true
 * RA.isNotFunction('abc'); //=> true
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isFunction2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isGeneratorFunction = __webpack_require__(6);

var _isGeneratorFunction2 = _interopRequireDefault(_isGeneratorFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Generator Function`
 *
 * @func isNotGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotGeneratorFunction(function* test() { }); //=> false
 * RA.isNotGeneratorFunction(null); //=> true
 * RA.isNotGeneratorFunction(function test() { }); //=> true
 * RA.isNotGeneratorFunction(() => {}); //=> true
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isGeneratorFunction2.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isInterger = __webpack_require__(12);

var _isInterger2 = _interopRequireDefault(_isInterger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is complement of an `integer`.
 *
 *
 * @func isNotInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isInteger|isInteger}
 * @example
 *
 * RA.isNotInteger(0); //=> false
 * RA.isNotInteger(1); //=> false
 * RA.isNotInteger(-100000); //=> false
 *
 * RA.isNotInteger(0.1);       //=> true
 * RA.isNotInteger(Math.PI);   //=> true
 *
 * RA.isNotInteger(NaN);       //=> true
 * RA.isNotInteger(Infinity);  //=> true
 * RA.isNotInteger(-Infinity); //=> true
 * RA.isNotInteger('10');      //=> true
 * RA.isNotInteger(true);      //=> true
 * RA.isNotInteger(false);     //=> true
 * RA.isNotInteger([1]);       //=> true
 */
exports.default = (0, _ramda.complement)(_isInterger2.default);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNaN = __webpack_require__(13);

var _isNaN2 = _interopRequireDefault(_isNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
 *
 * @func isNotNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNaN|isNaN}
 * @example
 *
 * RA.isNotNaN(NaN); // => false
 * RA.isNotNaN(Number.NaN); // => false
 * RA.isNotNaN(0 / 0); // => false
 *
 * RA.isNotNaN('NaN'); // => true
 * RA.isNotNaN(undefined); // => true
 * RA.isNotNaN({}); // => true
 * RA.isNotNaN('blabla'); // => true
 *
 * RA.isNotNaN(true); // => true
 * RA.isNotNaN(null); // => true
 * RA.isNotNaN(37); // => true
 * RA.isNotNaN('37'); // => true
 * RA.isNotNaN('37.37'); // => true
 * RA.isNotNaN(''); // => true
 * RA.isNotNaN(' '); // => true
 */
exports.default = (0, _ramda.complement)(_isNaN2.default);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

/**
 * Checks if input value is complement of `null` or `undefined`
 *
 * @func isNotNil
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNotNil(null); //=> false
 * RA.isNotNil(undefined); //=> false
 * RA.isNotNil(0); //=> true
 * RA.isNotNil([]); //=> true
 */
exports.default = (0, _ramda.complement)(_ramda.isNil);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNumber = __webpack_require__(3);

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if value is a complement of `Number` primitive or object
 *
 * @func isNotNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNumber|isNumber}
 * @example
 *
 * RA.isNotNumber(5); // => false
 * RA.isNotNumber(Number.MAX_VALUE); // => false
 * RA.isNotNumber(-Infinity); // => false
 * RA.isNotNumber('5'); // => true
 */
exports.default = (0, _ramda.complement)(_isNumber2.default);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isObject = __webpack_require__(14);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if input value is complement of language type of `Object`
 *
 * @func isNotObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObject|isObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObject({}); //=> false
 * RA.isNotObject([]); //=> false
 * RA.isNotObject(() => {}); //=> false
 * RA.isNotObject(null); //=> true
 * RA.isNotObject(undefined); //=> true
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isObject2.default);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isObjectLike = __webpack_require__(8);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isNotObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObjectLike({}); //=> false
 * RA.isNotObjectLike([]); //=> false
 * RA.isNotObjectLike(() => {}); //=> true
 * RA.isNotObjectLike(null); //=> true
 * RA.isNotObjectLike(undefined); //=> true
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isObjectLike2.default);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isPlainObject = __webpack_require__(15);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/**
 * Check to see if an object is a not plain object (created using `{}`, `new Object()` or `Object.create(null)`)
 *
 * @func isNotPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isPlainObject|isPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isNotPlainObject(new Bar()); //=> true
 * RA.isNotPlainObject({ prop: 'value' }); //=> false
 * RA.isNotPlainObject(['a', 'b', 'c']); //=> true
 * RA.isNotPlainObject(Object.create(null); //=> false
 * RA.isNotPlainObject(new Object()); //=> false
 */
/* eslint-enable max-len */
exports.default = (0, _ramda.complement)(_isPlainObject2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isString = __webpack_require__(16);

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is complement of `String`
 *
 * @func isNotString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isString|isString}
 * @example
 *
 * RA.isNotString('abc'); //=> false
 * RA.isNotString(1); //=> true
 */
exports.default = (0, _ramda.complement)(_isString2.default);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isUndefined = __webpack_require__(17);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if input value is complement `undefined`
 *
 * @func isNotUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isUndefined|isUndefined}
 * @example
 *
 * RA.isNotUndefined(1); //=> true
 * RA.isNotUndefined(undefined); //=> false
 * RA.isNotUndefined(null); //=> true
 */
exports.default = (0, _ramda.complement)(_isUndefined2.default);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNumber = __webpack_require__(3);

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.both)(_isNumber2.default, isFinite);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isFinite = __webpack_require__(5);

var _isFinite2 = _interopRequireDefault(_isFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.both)(_isFinite2.default, (0, _ramda.converge)(_ramda.equals, [Math.floor, _ramda.identity]));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = __webpack_require__(0);

var _isNumber = __webpack_require__(3);

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.both)(_isNumber2.default, isNaN);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotInteger = exports.isInteger = exports.isNotFinite = exports.isFinite = exports.isNotNaN = exports.isNaN = exports.isNotNumber = exports.isNumber = exports.isNotDate = exports.isDate = exports.isNotPlainObject = exports.isPlainObject = exports.isNotObjectLike = exports.isObjectLike = exports.isNotObject = exports.isObject = exports.isNotFunction = exports.isFunction = exports.isNotAsyncFunction = exports.isAsyncFunction = exports.isNotGeneratorFunction = exports.isGeneratorFunction = exports.isNotArrayLike = exports.isNotString = exports.isString = exports.isNilOrEmpty = exports.isNotEmpty = exports.isNotBoolean = exports.isBoolean = exports.isNotArray = exports.isArray = exports.isNotNil = exports.isNotNull = exports.isNull = exports.isUndefined = exports.isNotUndefined = undefined;

var _isNotUndefined = __webpack_require__(37);

Object.defineProperty(exports, 'isNotUndefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotUndefined).default;
  }
});

var _isUndefined = __webpack_require__(17);

Object.defineProperty(exports, 'isUndefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUndefined).default;
  }
});

var _isNull = __webpack_require__(7);

Object.defineProperty(exports, 'isNull', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNull).default;
  }
});

var _isNotNull = __webpack_require__(2);

Object.defineProperty(exports, 'isNotNull', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotNull).default;
  }
});

var _isNotNil = __webpack_require__(31);

Object.defineProperty(exports, 'isNotNil', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotNil).default;
  }
});

var _isArray = __webpack_require__(9);

Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isArray).default;
  }
});

var _isNotArray = __webpack_require__(20);

Object.defineProperty(exports, 'isNotArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotArray).default;
  }
});

var _isBoolean = __webpack_require__(10);

Object.defineProperty(exports, 'isBoolean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isBoolean).default;
  }
});

var _isNotBoolean = __webpack_require__(23);

Object.defineProperty(exports, 'isNotBoolean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotBoolean).default;
  }
});

var _isNotEmpty = __webpack_require__(25);

Object.defineProperty(exports, 'isNotEmpty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotEmpty).default;
  }
});

var _isNilOrEmpty = __webpack_require__(19);

Object.defineProperty(exports, 'isNilOrEmpty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNilOrEmpty).default;
  }
});

var _isString = __webpack_require__(16);

Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isString).default;
  }
});

var _isNotString = __webpack_require__(36);

Object.defineProperty(exports, 'isNotString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotString).default;
  }
});

var _isNotArrayLike = __webpack_require__(21);

Object.defineProperty(exports, 'isNotArrayLike', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotArrayLike).default;
  }
});

var _isGeneratorFunction = __webpack_require__(6);

Object.defineProperty(exports, 'isGeneratorFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isGeneratorFunction).default;
  }
});

var _isNotGeneratorFunction = __webpack_require__(28);

Object.defineProperty(exports, 'isNotGeneratorFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotGeneratorFunction).default;
  }
});

var _isAsyncFunction = __webpack_require__(4);

Object.defineProperty(exports, 'isAsyncFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isAsyncFunction).default;
  }
});

var _isNotAsyncFunction = __webpack_require__(22);

Object.defineProperty(exports, 'isNotAsyncFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotAsyncFunction).default;
  }
});

var _isFunction = __webpack_require__(1);

Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFunction).default;
  }
});

var _isNotFunction = __webpack_require__(27);

Object.defineProperty(exports, 'isNotFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotFunction).default;
  }
});

var _isObject = __webpack_require__(14);

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _isNotObject = __webpack_require__(33);

Object.defineProperty(exports, 'isNotObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotObject).default;
  }
});

var _isObjectLike = __webpack_require__(8);

Object.defineProperty(exports, 'isObjectLike', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObjectLike).default;
  }
});

var _isNotObjectLike = __webpack_require__(34);

Object.defineProperty(exports, 'isNotObjectLike', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotObjectLike).default;
  }
});

var _isPlainObject = __webpack_require__(15);

Object.defineProperty(exports, 'isPlainObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isPlainObject).default;
  }
});

var _isNotPlainObject = __webpack_require__(35);

Object.defineProperty(exports, 'isNotPlainObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotPlainObject).default;
  }
});

var _isDate = __webpack_require__(11);

Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDate).default;
  }
});

var _isNotDate = __webpack_require__(24);

Object.defineProperty(exports, 'isNotDate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotDate).default;
  }
});

var _isNumber = __webpack_require__(3);

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumber).default;
  }
});

var _isNotNumber = __webpack_require__(32);

Object.defineProperty(exports, 'isNotNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotNumber).default;
  }
});

var _isNaN = __webpack_require__(13);

Object.defineProperty(exports, 'isNaN', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNaN).default;
  }
});

var _isNotNaN = __webpack_require__(30);

Object.defineProperty(exports, 'isNotNaN', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotNaN).default;
  }
});

var _isFinite = __webpack_require__(5);

Object.defineProperty(exports, 'isFinite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFinite).default;
  }
});

var _isNotFinite = __webpack_require__(26);

Object.defineProperty(exports, 'isNotFinite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotFinite).default;
  }
});

var _isInterger = __webpack_require__(12);

Object.defineProperty(exports, 'isInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isInterger).default;
  }
});

var _isNotInteger = __webpack_require__(29);

Object.defineProperty(exports, 'isNotInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNotInteger).default;
  }
});

var _isNotUndefined2 = _interopRequireDefault(_isNotUndefined);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull2 = _interopRequireDefault(_isNull);

var _isNotNull2 = _interopRequireDefault(_isNotNull);

var _isNotNil2 = _interopRequireDefault(_isNotNil);

var _isArray2 = _interopRequireDefault(_isArray);

var _isNotArray2 = _interopRequireDefault(_isNotArray);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isNotBoolean2 = _interopRequireDefault(_isNotBoolean);

var _isNotEmpty2 = _interopRequireDefault(_isNotEmpty);

var _isNilOrEmpty2 = _interopRequireDefault(_isNilOrEmpty);

var _isString2 = _interopRequireDefault(_isString);

var _isNotString2 = _interopRequireDefault(_isNotString);

var _isNotArrayLike2 = _interopRequireDefault(_isNotArrayLike);

var _isGeneratorFunction2 = _interopRequireDefault(_isGeneratorFunction);

var _isNotGeneratorFunction2 = _interopRequireDefault(_isNotGeneratorFunction);

var _isAsyncFunction2 = _interopRequireDefault(_isAsyncFunction);

var _isNotAsyncFunction2 = _interopRequireDefault(_isNotAsyncFunction);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNotFunction2 = _interopRequireDefault(_isNotFunction);

var _isObject2 = _interopRequireDefault(_isObject);

var _isNotObject2 = _interopRequireDefault(_isNotObject);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isNotObjectLike2 = _interopRequireDefault(_isNotObjectLike);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isNotPlainObject2 = _interopRequireDefault(_isNotPlainObject);

var _isDate2 = _interopRequireDefault(_isDate);

var _isNotDate2 = _interopRequireDefault(_isNotDate);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isNotNumber2 = _interopRequireDefault(_isNotNumber);

var _isNaN2 = _interopRequireDefault(_isNaN);

var _isNotNaN2 = _interopRequireDefault(_isNotNaN);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _isNotFinite2 = _interopRequireDefault(_isNotFinite);

var _isInterger2 = _interopRequireDefault(_isInterger);

var _isNotInteger2 = _interopRequireDefault(_isNotInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace RA
 */
var RA = {
  isNotUndefined: _isNotUndefined2.default,
  isUndefined: _isUndefined2.default,
  isNull: _isNull2.default,
  isNotNull: _isNotNull2.default,
  isNotNil: _isNotNil2.default,
  isArray: _isArray2.default,
  isNotArray: _isNotArray2.default,
  isBoolean: _isBoolean2.default,
  isNotBoolean: _isNotBoolean2.default,
  isNotEmpty: _isNotEmpty2.default,
  isNilOrEmpty: _isNilOrEmpty2.default,
  isString: _isString2.default,
  isNotString: _isNotString2.default,
  isNotArrayLike: _isNotArrayLike2.default,
  isGeneratorFunction: _isGeneratorFunction2.default,
  isNotGeneratorFunction: _isNotGeneratorFunction2.default,
  isAsyncFunction: _isAsyncFunction2.default,
  isNotAsyncFunction: _isNotAsyncFunction2.default,
  isFunction: _isFunction2.default,
  isNotFunction: _isNotFunction2.default,
  isObject: _isObject2.default,
  isNotObject: _isNotObject2.default,
  isObjectLike: _isObjectLike2.default,
  isNotObjectLike: _isNotObjectLike2.default,
  isPlainObject: _isPlainObject2.default,
  isNotPlainObject: _isNotPlainObject2.default,
  isDate: _isDate2.default,
  isNotDate: _isNotDate2.default,
  isNumber: _isNumber2.default,
  isNotNumber: _isNotNumber2.default,
  isNaN: _isNaN2.default,
  isNotNaN: _isNotNaN2.default,
  isFinite: _isFinite2.default,
  isNotFinite: _isNotFinite2.default,
  isInteger: _isInterger2.default,
  isNotInteger: _isNotInteger2.default
};

exports.default = RA;

/***/ })
/******/ ]);
});