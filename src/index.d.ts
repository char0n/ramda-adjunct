declare var RA: RamdaAdjunct.Static;

declare namespace RamdaAdjunct {

    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface Apply<T> extends Functor<T> {
        ap<U>(fn: Apply<(t: T) => U>): Apply<U>;
    }

    interface Catamorphism<T> {
        cata<T1>(leftFn: (v: T1) => T, rightFn: (v: T1) => T): T;
    }

    interface Variadic<T1, T2> {
        (...args: T1[]): T2;
    }

    type Dictionary<T> = { [key: string]: T }

    export interface Static {
        /**
         * Checks if input value is `Array`.
         */
        isArray(val: any): val is Array<any>;

        /**
         * Checks if input value is `Boolean.
         */
        isBoolean(val: any): val is boolean;

        /**
         * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
         */
        isNilOrEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `Array`.
         */
        isNotArray(val: any): boolean;

        /**
         * Checks if input value is complement of `Boolean`.
         */
        isNotBoolean(val: any): boolean;

        /**
         * Returns true if the given value is not its type's empty value; `false` otherwise.
         */
        isNotEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `null` or `undefined`.
         */
        isNotNil(val: any): boolean;

        /**
         * Checks if input value is complement of `null`.
         */
        isNotNull(val: any): boolean;

        /**
         * Checks if input value is complement of `String`.
         */
        isNotString(val: any): boolean;

        /**
         * Checks if input value is complement `undefined`.
         */
        isNotUndefined(val: any): boolean;

        /**
         * Checks if input value is `null`.
         */
        isNull(val: any): val is null;

        /**
         * Checks if input value is `String`.
         */
        isString(val: any): val is string;

        /**
         * Checks if input value is `undefined`.
         */
        isUndefined(val: any): val is undefined;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isArrayLike(val: any): boolean


        /**
         * Tests whether or not an object is similar to an array.
         */
        isNotArrayLike(val: any): boolean;

        /**
         * Checks if input value is `Generator Function`.
         */
        isGeneratorFunction(val: any): val is Function;

        /**
         * Checks if input value is complement of `Generator Function`.
         */
        isNotGeneratorFunction(val: any): boolean;

        /**
         * Checks if input value is `Async Function`.
         */
        isAsyncFunction(val: any): val is Function;

        /**
         * Checks if input value is complement of `Async Function`.
         */
        isNotAsyncFunction(val: any): boolean;

        /**
         * Checks if input value is `Function`.
         */
        isFunction(val: any): val is Function;

        /**
         * Checks if input value is complement of `Function`.
         */
        isNotFunction(val: any): boolean;

        /**
         * Checks if input value is language type of `Object`.
         */
        isObj(val: any): val is Object | Function;
        isObject(val: any): val is Object | Function;

        /**
         * Checks if input value is complement of language type of `Object`.
         */
        isNotObj(val: any): boolean;
        isNotObject(val: any): boolean; // alias

        /**
         * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isObjLike(val: any): val is Object;
        isObjectLike(val: any): val is Object; // alias

        /**
         * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isNotObjLike(val: any): boolean;
        isNotObjectLike(val: any): boolean; // alias

        /**
         * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isPlainObj(val: any): val is object;
        isPlainObject(val: any): val is object; // alias

        /**
         * Check to see if an object is not a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isNotPlainObj(val: any): boolean;
        isNotPlainObject(val: any): boolean; // alias

        /**
         * Checks if value is `Date` object.
         */
        isDate(val: any): val is Date;

        /**
         * Checks if value is complement of `Date` object.
         */
        isNotDate(val: any): boolean;

        /**
         * Checks if value is valid `Date` object.
         */
        isValidDate(val: any): val is Date;

        /**
         * Checks if value is complement of valid `Date` object.
         */
        isNotValidDate(val: any): boolean;

        /**
         * Checks if value is complement of valid `Date` object.
         */
        isInvalidDate(val: any): boolean; // alias of isNotValidDate

        /**
         * Checks whether the passed value is `NaN` and its type is `Number`.
         * It is a more robust version of the original, global isNaN().
         */
        isNaN(val: any): val is typeof NaN;

        /**
         * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
         */
        isNotNaN(val: any): boolean;

        /**
         * Checks if value is a `Number` primitive or object.
         */
        isNumber(val: any): val is Number;

        /**
         * Checks if value is a complement of `Number` primitive or object.
         */
        isNotNumber(val: any): boolean;

        /**
         * Checks if value is a positive `Number` primitive or object.
         */
        isPositive(val: any): val is number

        /**
         * Checks if value is a negative `Number` primitive or object.
         */
        isNegative(val: any): val is number

        /**
         * Checks whether the passed value is a finite `Number`.
         */
        isFinite(val: any): boolean;

        /**
         * Checks whether the passed value is complement of finite `Number`.
         */
        isNotFinite(val: any): boolean;

        /**
         * Checks whether the passed value is an `integer`.
         */
        isInteger(val: any): val is number;

        /**
         * Checks whether the passed value is complement of `integer`.
         */
        isNotInteger(val: any): boolean;

        /**
         * Checks whether the passed value is a `float`.
         */
        isFloat(val: any): val is number;

        /**
         * Checks whether the passed value is complement of a `float`.
         */
        isNotFloat(val: any): boolean;

        /**
         * A function that returns `undefined`.
         */
        stubUndefined(): undefined;

        /**
         * A function that returns `null`.
         */
        stubNull():  null;

        /**
         * A function that performs no operations.
         */
        noop(): undefined;

        /**
         * Picks values from list by indexes.
         */
        pickIndexes<T>(indexes: Array<number>, list: Array<T>): Array<T>;
        pickIndexes(indexes: Array<number>): <T>(list: Array<T>) => Array<T>;

        /**
         * Creates a list from from arguments.
         */
        list(...items: any[]): Array<any>;

        /**
         * Returns the result of concatenating the given lists or strings.
         */
        concatRight<T extends Array<any>|string>(firstList: T, secondList: T): T;

        /**
         * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
         */
        paths(ps: Array<Array<string | number>>, obj: object): Array<any>;
        paths(ps: Array<Array<string | number>>): (obj: object) => Array<any>;

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftFN<T>(arity: number, fn: Variadic<Apply<T>, T>): Apply<T>;

        /**
         * "lifts" a function of arity > 1 so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftF<T>(fn: Variadic<Apply<T>, T>): Apply<T>;

        /**
         * The catamorphism for either. If the either is right than the right function will be executed with
         * the right value and the value of the function returned. Otherwise the left function
         * will be called with the left value.
         */
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1, rightFn: (rightValue: V2) => T2, either: Catamorphism<V1|V2>): T1|T2;
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1, rightFn: (rightValue: V2) => T2): {
            (either: Catamorphism<V1|V2>): T1|T2;
        };
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1): {
            (rightFn: (rightValue: V2) => T1, either: Catamorphism<V1|V2>): T1|T2;
            (rightFn: (rightValue: V2) => T1): {
                (either: Catamorphism<V1|V2>): T1|T2;
            }
        };

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to the keysMap object as `{oldKey: newKey}`.
         * When some key is not found in the keysMap, then it's passed as-is.
         */
        renameKeys(keysMap: Dictionary<string>, obj: object): object;
        renameKeys(keysMap: Dictionary<string>): (obj: object) => object;

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to logic of renaming function.
         */
        renameKeysWith(renameFn: (key: string) => string, obj: object): object;
        renameKeysWith(renameFn: (key: string) => string): (obj: object) => object;

        /**
         * Create a new object with the own properties of the second object merged with
         * the own properties of the first object. If a key exists in both objects,
         * the value from the first object will be used. *
         * Putting it simply: it sets properties only if they don't exist.
         */
        mergeRight(source: object, destination: object): object;
        mergeRight(source: object): (destination: object) => object;

        /**
         * Reset properties of the object to their default values.
         * Alias of {@link http://ramdajs.com/docs/#merge|mergeRight}.
         */
        resetToDefault(defaultOptions: object, options: object): object; // alias of mergeRight
        resetToDefault(defaultOptions: object): (options: object) => object; // alias of mergeRight

        /**
         * Set properties only if they don't exist. Useful for passing defaults.
         * Alias of {@link http://ramdajs.com/docs/#merge|mergeRight}.
         */
        defaults(defaultOptions: object, options: object): object; // alias of mergeRight
        defaults(defaultOptions: object): (options: object) => object; // alias of mergeRight

        /**
         * Functional equivalent of merging object properties with object spread.
         */
        mergeProps(ps: Array<string>, obj: object): object;
        mergeProps(ps: Array<string>): (obj: object) => object;

        /**
         * Merge objects under corresponding paths.
         */
        mergePaths(ps: Array<Array<string | number>>, obj: object): object;
        mergePaths(ps: Array<Array<string | number>>): (obj: object) => object;

        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weave(fn: Function, config: any): Function;
        weave(fn: Function): (config: any) => Function;

        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weaveLazy(fn: Function, configAccessor: Function): Function;
        weaveLazy(fn: Function): (configAccessor: Function) => Function;

        /**
         * Returns a curried equivalent of the provided function, with the specified arity.
         * This function is like curryN, except that the provided arguments order is reversed.
         */
        curryRightN(arity: number, fn: Function): Function
        curryRightN(arity: number): (fn: Function) => Function

        /**
         * Returns a curried equivalent of the provided function.
         * This function is like curry, except that the provided arguments order is reversed.
         */
        curryRight(fn: Function): Function

        /**
         * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
         * which produces promises (or a mix of promises and values),
         * iterate over all the values in the `Iterable` into an array and
         * reduce the array to a value using the given iterator function.
         */
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: R): TResult;
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): {
            (list: R): TResult
        };
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult): {
            (acc: TResult, list: R): TResult;
            (acc: TResult): {
                (list: R): TResult
            }
        };

        /**
         * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
         * which produces promises (or a mix of promises and values),
         * iterate over all the values in the `Iterable` into an array and
         * reduce the array to a value using the given iterator function.
         *
         * Similar to {@link RA.reduceP|reduceP} except moves through the input list from the right to the left.
         * The iterator function receives two values: (value, acc),
         * while the arguments' order of reduceP's iterator function is (acc, value).
         */
        reduceRightP<T, TResult, R extends T[]>(fn: (elem: T, acc: TResult) => TResult, acc: TResult, list: R): TResult;
        reduceRightP<T, TResult, R extends T[]>(fn: (elem: T, acc: TResult) => TResult, acc: TResult): {
            (list: R): TResult
        };
        reduceRightP<T, TResult, R extends T[]>(fn: (elem: T, acc: TResult) => TResult): {
            (acc: TResult, list: R): TResult;
            (acc: TResult): {
                (list: R): TResult
            }
        };
        /**
         * Returns `true` if data structure focused by the given lens equals provided value.
         */
        lensEq(lens: Function, value: any, data: any): boolean;
        lensEq(lens: Function, value: any): (data: any) => boolean;
        lensEq(lens: Function): (value: any) => (data: any) => boolean;

        /**
         * Returns `false` if data structure focused by the given lens equals provided value.
         */
        lensNotEq(lens: Function, value: any, data: any): boolean;
        lensNotEq(lens: Function, value: any): (data: any) => boolean;
        lensNotEq(lens: Function): (value: any) => (data: any) => boolean;

        /**
         * Returns `true` if data structure focused by the given lens satisfies the predicate.
         * Note that the predicate is expected to return boolean value and will be evaluated
         * as `false` unless the predicate returns `true`.
         */
        lensSatisfies(predicate: Function, lens: Function, data: any): boolean;
        lensSatisfies(predicate: Function, lens: Function): (data: any) => boolean;
        lensSatisfies(predicate: Function): (lens: Function) => (data: any) => boolean;

        /**
         * Returns `true` if data structure focused by the given lens doesn't satisfy the predicate.
         * Note that the predicate is expected to return boolean value.
         */
        lensNotSatisfy(predicate: Function, lens: Function, data: any): boolean;
        lensNotSatisfy(predicate: Function, lens: Function): (data: any) => boolean;
        lensNotSatisfy(predicate: Function): (lens: Function) => (data: any) => boolean;

        /**
         * Returns a "view" of the given data structure, determined by the given lens
         * The lens's focus determines which portion of the data structure is visible.
         * Returns the defaultValue if "view" is null, undefined or NaN; otherwise the "view" is returned.
         */
        viewOr(defaultValue: any, lens: Function, data: any): any;
        viewOr(defaultValue: any, lens: Function): (data: any) => any;
        viewOr(defaultValue: any): (lens: Function) => (data: any) => any;

        /**
         * Returns whether or not an object has an own property with the specified name at a given path.
         */
        hasPath(path: Array<string|number>, obj: object): boolean;
        hasPath(path: Array<string|number>): (obj: object) => boolean;

        /**
         * Composable shortcut for `Promise.resolve`.
         *
         * Returns a Promise object that is resolved with the given value.
         * If the value is a thenable (i.e. has a "then" method), the returned promise will
         * "follow" that thenable, adopting its eventual state.
         */
        resolveP<T>(value?: T): Promise<T>;

        /**
         * Composable shortcut for `Promise.reject`.
         *
         * Returns a Promise object that is rejected with the given reason.
         */
        rejectP<T>(value?: T): Promise<T>;

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * from fromIndex (inclusive).
         * Dispatches to the slice method of the third argument, if present.
         */
        sliceFrom<T>(fromIndex: number, list: string|Array<T>): string|Array<T>;

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * to toIndex (exclusive).
         * Dispatches to the slice method of the second argument, if present.
         */
        sliceTo<T>(toIndex: number, list: string|Array<T>): string|Array<T>;

         /**
         * Identity type.
         */
        Identity: Function;
    }

}

export = RA;
