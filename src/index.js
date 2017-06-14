// Type
import isNotUndefined from './isNotUndefined';
import isUndefined from './isUndefined';
import isNull from './isNull';
import isNotNull from './isNotNull';
import isNotNil from './isNotNil';
import isArray from './isArray';
import isNotArray from './isNotArray';
import isBoolean from './isBoolean';
import isNotBoolean from './isNotBoolean';
import isNotEmpty from './isNotEmpty';
import isNilOrEmpty from './isNilOrEmpty';
import isString from './isString';
import isNotString from './isNotString';
import isArrayLike from './isArrayLike';
import isNotArrayLike from './isNotArrayLike';
import isGeneratorFunction from './isGeneratorFunction';
import isNotGeneratorFunction from './isNotGeneratorFunction';
import isAsyncFunction from './isAsyncFunction';
import isNotAsyncFunction from './isNotAsyncFunction';
import isFunction from './isFunction';
import isNotFunction from './isNotFunction';
import isObj from './isObj';
import isNotObj from './isNotObj';
import isObjLike from './isObjLike';
import isNotObjLike from './isNotObjLike';
import isPlainObj from './isPlainObj';
import isNotPlainObj from './isNotPlainObj';
import isDate from './isDate';
import isNotDate from './isNotDate';
import isValidDate from './isValidDate';
import isNotValidDate from './isNotValidDate';
import isNumber from './isNumber';
import isNotNumber from './isNotNumber';
import isNaN from './isNaN';
import isNotNaN from './isNotNaN';
import isFinite from './isFinite';
import isNotFinite from './isNotFinite';
import isInteger from './isInterger';
import isNotInteger from './isNotInteger';
// Function
import stubUndefined from './stubUndefined';
import stubNull from './stubNull';
import noop from './noop';
import liftFN from './liftFN';
import liftF from './liftF';
import cata from './cata';
import weave from './weave';
// List
import pickIndexes from './pickIndexes';
import list from './list';
// Object
import defaults from './defaults';
import paths from './paths';
import renameKeys from './renameKeys';
import renameKeysWith from './renameKeysWith';
import mergeRight from './mergeRight';
// Types
import Identity from './fantasy-land/Identity';

// Type
export { default as isNotUndefined } from './isNotUndefined';
export { default as isUndefined } from './isUndefined';
export { default as isNull } from './isNull';
export { default as isNotNull } from './isNotNull';
export { default as isNotNil } from './isNotNil';
export { default as isArray } from './isArray';
export { default as isNotArray } from './isNotArray';
export { default as isBoolean } from './isBoolean';
export { default as isNotBoolean } from './isNotBoolean';
export { default as isNotEmpty } from './isNotEmpty';
export { default as isNilOrEmpty } from './isNilOrEmpty';
export { default as isString } from './isString';
export { default as isNotString } from './isNotString';
export { default as isArrayLike } from './isArrayLike';
export { default as isNotArrayLike } from './isNotArrayLike';
export { default as isGeneratorFunction } from './isGeneratorFunction';
export { default as isNotGeneratorFunction } from './isNotGeneratorFunction';
export { default as isAsyncFunction } from './isAsyncFunction';
export { default as isNotAsyncFunction } from './isNotAsyncFunction';
export { default as isFunction } from './isFunction';
export { default as isNotFunction } from './isNotFunction';
export { default as isObj } from './isObj';
export { default as isObject } from './isObj'; // alias of isObject
export { default as isNotObj } from './isNotObj';
export { default as isNotObject } from './isNotObj'; // alias of isNotObj
export { default as isObjLike } from './isObjLike';
export { default as isObjectLike } from './isObjLike'; // alias of isObjLike
export { default as isNotObjLike } from './isNotObjLike';
export { default as isNotObjectLike } from './isNotObjLike'; // alias of isNotObjLike
export { default as isPlainObj } from './isPlainObj';
export { default as isPlainObject } from './isPlainObj';
export { default as isNotPlainObj } from './isNotPlainObj';
export { default as isNotPlainObject } from './isNotPlainObj'; // alias of isNotPlainObject
export { default as isDate } from './isDate';
export { default as isNotDate } from './isNotDate';
export { default as isValidDate } from './isValidDate';
export { default as isNotValidDate } from './isNotValidDate';
export { default as isInvalidDate } from './isNotValidDate'; // alias of isNotValidDate
export { default as isNumber } from './isNumber';
export { default as isNotNumber } from './isNotNumber';
export { default as isNaN } from './isNaN';
export { default as isNotNaN } from './isNotNaN';
export { default as isFinite } from './isFinite';
export { default as isNotFinite } from './isNotFinite';
export { default as isInteger } from './isInterger';
export { default as isNotInteger } from './isNotInteger';
// Function
export { default as stubUndefined } from './stubUndefined';
export { default as stubNull } from './stubNull';
export { default as noop } from './noop';
export { default as liftFN } from './liftFN';
export { default as liftF } from './liftF';
export { default as cata } from './cata';
export { default as weave } from './weave';
// List
export { default as pickIndexes } from './pickIndexes';
export { default as list } from './list';
// Object
export { default as defaults } from './defaults';
export { default as paths } from './paths';
export { default as renameKeys } from './renameKeys';
export { default as renameKeysWith } from './renameKeysWith';
export { default as mergeRight } from './mergeRight';
export { default as resetToDefault } from './mergeRight';
// Types
export { default as Identity } from './fantasy-land/Identity';

/**
 * @namespace RA
 */
const RA = {
  // Type
  isNotUndefined,
  isUndefined,
  isNull,
  isNotNull,
  isNotNil,
  isArray,
  isNotArray,
  isBoolean,
  isNotBoolean,
  isNotEmpty,
  isNilOrEmpty,
  isString,
  isNotString,
  isArrayLike,
  isNotArrayLike,
  isGeneratorFunction,
  isNotGeneratorFunction,
  isAsyncFunction,
  isNotAsyncFunction,
  isFunction,
  isNotFunction,
  isObj,
  isObject: isObj,
  isNotObj,
  isNotObject: isNotObj,
  isObjLike,
  isObjectLike: isObjLike,
  isNotObjLike,
  isNotObjectLike: isNotObjLike,
  isPlainObj,
  isPlainObject: isPlainObj,
  isNotPlainObj,
  isNotPlainObject: isNotPlainObj,
  isDate,
  isNotDate,
  isValidDate,
  isNotValidDate,
  isInvalidDate: isNotValidDate,
  isNumber,
  isNotNumber,
  isNaN,
  isNotNaN,
  isFinite,
  isNotFinite,
  isInteger,
  isNotInteger,
  // Function
  stubUndefined,
  stubNull,
  noop,
  liftFN,
  liftF,
  cata,
  weave,
  // List
  pickIndexes,
  list,
  // Object
  defaults,
  resetToDefault: mergeRight,
  paths,
  renameKeys,
  renameKeysWith,
  mergeRight,
  // Types
  Identity,
};

export default RA;
