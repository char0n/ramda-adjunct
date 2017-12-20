/**
 * @namespace RA
 */

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
export { default as isPositive } from './isPositive';
export { default as isNegative } from './isNegative';
export { default as isNaN } from './isNaN';
export { default as isNotNaN } from './isNotNaN';
export { default as isFinite } from './isFinite';
export { default as isNotFinite } from './isNotFinite';
export { default as isInteger } from './isInteger';
export { default as isNotInteger } from './isNotInteger';
export { default as isFloat } from './isFloat';
export { default as isNotFloat } from './isNotFloat';
export { default as isValidNumber } from './isValidNumber';
export { default as isNotValidNumber } from './isNotValidNumber';
export { default as isInvalidNumber } from './isNotValidNumber'; // alias of isNotValidNumber
export { default as isOdd } from './isOdd';
export { default as isEven } from './isEven';
export { default as isPair } from './isPair';
export { default as isNotPair } from './isNotPair';
export { default as isThenable } from './isThenable';
export { default as isPromise } from './isPromise';
export { default as isTruthy } from './isTruthy';
export { default as isFalsy } from './isFalsy';
// Function
export { default as stubUndefined } from './stubUndefined';
export { default as stubNull } from './stubNull';
export { default as stubObj } from './stubObj';
export { default as stubObject } from './stubObj';
export { default as stubString } from './stubString';
export { default as stubArray } from './stubArray';
export { default as noop } from './noop';
export { default as liftFN } from './liftFN';
export { default as liftF } from './liftF';
export { default as cata } from './cata';
export { default as weave } from './weave';
export { default as weaveLazy } from './weaveLazy';
export { default as curryRightN } from './curryRightN';
export { default as curryRight } from './curryRight';
export { default as resolveP } from './resolveP';
export { default as rejectP } from './rejectP';
// List
export { default as pickIndexes } from './pickIndexes';
export { default as list } from './list';
export { default as concatRight } from './concatRight';
export { default as reduceP } from './reduceP';
export { default as reduceRightP } from './reduceRightP';
export { default as sliceFrom } from './sliceFrom';
export { default as sliceTo } from './sliceTo';
export { default as omitIndexes } from './omitIndexes';
// Object
export { default as paths } from './paths';
export { default as renameKeys } from './renameKeys';
export { default as renameKeysWith } from './renameKeysWith';
export { default as mergeRight } from './mergeRight';
export { default as resetToDefault } from './mergeRight';
export { default as mergeProps } from './mergeProps';
export { default as mergePaths } from './mergePaths';
export { default as mergeProp } from './mergeProp';
export { default as mergePath } from './mergePath';
export { default as viewOr } from './viewOr';
export { default as hasPath } from './hasPath';
export { default as spreadProp } from './spreadProp';
export { default as spreadPath } from './spreadPath';
export { default as flattenProp } from './flattenProp';
export { default as flattenPath } from './flattenPath';
// Relation
export { default as lensEq } from './lensEq';
export { default as lensNotEq } from './lensNotEq';
export { default as lensSatisfies } from './lensSatisfies';
export { default as lensNotSatisfy } from './lensNotSatisfy';
export { default as lensIso } from './lensIso';
// Types
export { default as Identity } from './fantasy-land/Identity';
