declare var RA: RamdaAdjunct.Static;

declare namespace RamdaAdjunct {

    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface Apply<T> extends Functor<T> {
        ap<U>(fn: Apply<(t: T) => U>): Apply<U>;
    }

    interface Foldable<T> {
        reduce<Acc>(fn: (acc: Acc, val: T) => Acc, initAcc: Acc): Acc;
    }

    interface Semigroup {
        // https://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types
        concat(other: this): this;
    }

    interface Catamorphism<T> {
        cata<T1>(leftFn: (v: T1) => T, rightFn: (v: T1) => T): T;
    }

    type Variadic<T1, T2> = (...args: T1[]) => T2;

    interface IteratorResult<T> {
        done: boolean;
        value: T;
    }

    interface Iterator<T> {
        next(value?: any): IteratorResult<T>;
        return?(value?: any): IteratorResult<T>;
        throw?(e?: any): IteratorResult<T>;
    }

    interface Dictionary<T> { [key: string]: T; }

    type DictPred<T> = (value: T, key: string) => boolean;

    export interface Static {
        /**
         * Checks if input value is `Array`.
         */
        isArray(val: any): val is any[];

        /**
         * Checks if input value is an empty `Array`.
         */
        isEmptyArray(val: any): val is any[];

        /**
         * Checks if input value is `Boolean`.
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
         * Checks if input value is a non empty `Array`.
         */
        isNonEmptyArray(val: any): val is any[];

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
         * Checks if input value is a non empty `String`.
         */
        isNonEmptyString(val: any): boolean;

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
         * Checks if input value is an empty `String`.
         */
        isEmptyString(val: any): val is string;

        /**
         * Checks if input value is `undefined`.
         */
        isUndefined(val: any): val is undefined;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isArrayLike(val: any): boolean;

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
        isObj(val: any): val is {} | Function;
        isObject(val: any): val is {} | Function; // alias

        /**
         * Checks if input value is complement of language type of `Object`.
         */
        isNotObj(val: any): boolean;
        isNotObject(val: any): boolean; // alias

        /**
         * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isObjLike(val: any): val is object;
        isObjectLike(val: any): val is object; // alias

        /**
         * Checks if value is not object-like.
         * A value is object-like if it's not null and has a typeof result of "object".
         */
        isNotObjLike(val: any): boolean;
        isNotObjectLike(val: any): boolean; // alias

        /**
         * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isPlainObj(val: any): val is object;
        isPlainObject(val: any): val is object; // alias

        /**
         * Check to see if an object is not a plain object
         * (created using `{}`, `new Object()` or `Object.create(null)`).
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
        isNumber(val: any): val is number;

        /**
         * Checks if value is a complement of `Number` primitive or object.
         */
        isNotNumber(val: any): boolean;

        /**
         * Checks if value is a positive `Number` primitive or object. Zero is considered neither
         * positive or negative.
         */
        isPositive(val: any): val is number;

        /**
         * Checks if value is a negative `Number` primitive or object. Zero is considered neither
         * positive or negative.
         */
        isNegative(val: any): val is number;

        /**
         * Checks if value is a non-positive `Number` primitive or object. This includes all
         * negative numbers and zero.
         */
        isNonPositive(val: any): val is number;

        /**
         * Checks if value is a non-negative `Number` primitive or object. This includes all
         * positive numbers and zero.
         */
        isNonNegative(val: any): val is number;

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
         * Checks if value is a valid `Number`. A valid `Number` is a number that is not `NaN`,
         * `Infinity` or `-Infinity`.
         */
        isValidNumber(val: any): boolean;

        /**
         * Checks if value is not a valid `Number`. A valid `Number` is a number that is not `NaN`,
         * `Infinity` or `-Infinity`.
         */
        isNotValidNumber(val: any): boolean;

        /**
         * Checks if value is odd integer number.
         * An odd number is an integer which is not a multiple DIVISIBLE of two.
         */
        isOdd(val: any): number;

        /**
         * Checks if value is even integer number.
         * An even number is an integer which is "evenly divisible" by two.
         * Zero is an even number because zero divided by two equals zero,
         * which despite not being a natural number, is an integer.
         * Even numbers are either positive or negative.
         */
        isEven(val: any): number;

        /**
         * Checks if input value is a pair.
         */
        isPair(val: any): val is any[];

        /**
         * Checks if input value is complement of a pair.
         */
        isNotPair(val: any): boolean;

        /**
         * Checks if value is `RegExp` object.
         */
        isRegExp(val: any): boolean;

        /**
         * Checks if value is complement of `RegExp` object.
         */
        isNotRegExp(val: any): boolean;

        /**
         * A function that returns `undefined`.
         */
        stubUndefined(): undefined;

        /**
         * A function that returns `null`.
         */
        stubNull(): null;

        /**
         * A function that returns new empty array on every call.
         */
        stubArray(): any[];

        /**
         * This function returns a new empty object.
         */
        stubObj(): {};
        stubObject(): {}; // alias

        /**
         * A function that returns empty string.
         */
        stubString(): "";

        /**
         * A function that performs no operations.
         */
        noop(): undefined;

        /**
         * Picks values from list by indexes.
         */
        pickIndexes<T>(indexes: number[], list: T[]): T[];
        pickIndexes(indexes: number[]): <T>(list: T[]) => T[];

        /**
         * Creates a list from from arguments.
         */
        list(...items: any[]): any[];

        /**
         * Returns a singleton array containing the value provided.
         * If value is already an array, it is returned as is.
         */
        ensureArray<T>(value: T | T[]): T[];

        /**
         * Returns the result of concatenating the given lists or strings.
         * Note: RA.concatAll expects all elements to be of the same type. It will throw an error if you concat an Array with a non-Array value.
         * Dispatches to the concat method of the preceding element, if present. Can also concatenate multiple elements of a [fantasy-land compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
         * Returns undefined if empty array was passed.
         */
        concatAll<S extends Semigroup>(foldable: Foldable<S>): S | undefined;

        /**
         * Returns the result of concatenating the given lists or strings.
         */
        concatRight<T extends any[]>(firstList: T, secondList: T): T;
        concatRight<T extends any[]>(firstList: T): (secondList: T) => T;
        concatRight(firstList: string, secondList: string): string;
        concatRight(firstList: string): (secondList: string) => string;

        /**
         * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
         */
        paths(ps: Array<Array<string | number>>, obj: object): any[];
        paths(ps: Array<Array<string | number>>): (obj: object) => any[];

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftFN<T>(arity: number, fn: Variadic<Apply<T>, T>): Apply<T>;
        liftFN(arity: number): <T>(fn: Variadic<Apply<T>, T>) => Apply<T>;

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
        cata<V1, V2, T1, T2>(
            leftFn: (leftValue: V1) => T1,
            rightFn: (rightValue: V2) => T2,
            either: Catamorphism<V1 | V2>,
        ): T1 | T2;
        cata<V1, V2, T1, T2>(
            leftFn: (leftValue: V1) => T1,
            rightFn: (rightValue: V2) => T2):
            (either: Catamorphism<V1 | V2>,
            ) => T1 | T2;
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1): {
            (rightFn: (rightValue: V2) => T1, either: Catamorphism<V1 | V2>): T1 | T2;
            (rightFn: (rightValue: V2) => T1): (either: Catamorphism<V1 | V2>) => T1 | T2
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
         * Alias of {@link http://ramdajs.com/docs/#merge|R.mergeRight}.
         */
        resetToDefault(defaultOptions: object, options: object): object; // alias of mergeRight
        resetToDefault(defaultOptions: object): (options: object) => object; // alias of mergeRight

        /**
         * Functional equivalent of merging object properties with object spread.
         */
        mergeProps(ps: string[], obj: object): object;
        mergeProps(ps: string[]): (obj: object) => object;

        /**
         * Merge objects under corresponding paths.
         */
        mergePaths(paths: Array<Array<string | number>>, obj: object): object;
        mergePaths(paths: Array<Array<string | number>>): (obj: object) => object;

        /**
         * Create a new object with the own properties of the object under the `p`
         * merged with the own properties of the provided `source`.
         * If a key exists in both objects, the value from the `source` object will be used.
         */
        mergeProp(p: string, source: object, obj: object): object;
        mergeProp(p: string, source: object): (obj: object) => object;
        mergeProp(p: string): {
            (source: object, obj: object): object;
            (source: object): (obj: object) => object;
        };

        /**
         * Create a new object with the own properties of the object under the `path`
         * merged with the own properties of the provided `source`.
         * If a key exists in both objects, the value from the `source` object will be used.
         */
        mergePath(path: Array<Array<string | number>>, source: object, obj: object): object;
        mergePath(path: Array<Array<string | number>>, source: object): (obj: object) => object;
        mergePath(path: Array<Array<string | number>>): {
            (source: object, obj: object): object;
            (source: object): (obj: object) => object;
        };

        /**
         * Returns a partial copy of an object containing only the keys
         * that don't satisfy the supplied predicate.
         */
        omitBy<T, U extends Dictionary<T>>(pred: DictPred<T>, obj: U): U;
        omitBy<T, U extends Dictionary<T>>(pred: DictPred<T>): (obj: U) => U;

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
        curryRightN(arity: number, fn: Function): Function;
        curryRightN(arity: number): (fn: Function) => Function;

        /**
         * Returns a curried equivalent of the provided function.
         * This function is like curry, except that the provided arguments order is reversed.
         */
        curryRight(fn: Function): Function;

        /**
         * {@link http://ramdajs.com/docs/#map|R.map} function that more closely resembles Array.prototype.map.
         * It takes two new parameters to its callback function: the current index, and the entire list.
         */
        mapIndexed<T, U>(iterator: (elem: T, key: number, list: T[]) => U, list: T[]): U[];
        mapIndexed<T, U>(iterator: (elem: T, key: number, list: T[]) => U): (list: T[]) => U[];
        mapIndexed<T, U>(
            iterator: (elem: T, key: number, list: Dictionary<T>) => U,
            list: Dictionary<T>,
        ): Dictionary<U>;
        mapIndexed<T, U>(
            iterator: (elem: T, key: number, list: Dictionary<T>) => U,
        ): (list: Dictionary<T>) => Dictionary<U>;
        mapIndexed<T, U>(iterator: (elem: T, key: number, list: Functor<T>) => U, list: Functor<T>): Functor<U>;
        mapIndexed<T, U>(iterator: (elem: T, key: number, list: Functor<T>) => U): (list: Functor<T>) => Functor<U>;
        mapIndexed(iterator: (char: string, key: number, str: string) => string, str: string): string[];
        mapIndexed(iterator: (char: string, key: number, str: string) => string): (str: string) => string[];

        /**
         * {@link http://ramdajs.com/docs/#reduce|R.reduce} function that more closely resembles Array.prototype.reduce.
         * It takes two new parameters to its callback function: the current index, and the entire list.
         */
        reduceIndexed<T, TResult, R extends T[]>(
            iterator: (acc: TResult, elem: T, key: number, list: R) => TResult,
            acc: TResult,
            list: R,
        ): TResult;
        reduceIndexed<T, TResult, R extends T[]>(
            iterator: (acc: TResult, elem: T, key: number, list: R) => TResult,
            acc: TResult,
        ): (list: R) => TResult;
        reduceIndexed<T, TResult, R extends T[]>(
            iterator: (acc: TResult, elem: T, key: number, list: R) => TResult,
        ): {
                (acc: TResult): (list: R) => TResult;
                (acc: TResult, list: R): TResult
            };

        /**
         * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
         * which produces promises (or a mix of promises and values),
         * iterate over all the values in the `Iterable` into an array and
         * reduce the array to a value using the given iterator function.
         */
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: R): TResult;
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: R) => TResult;
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult): {
            (acc: TResult, list: R): TResult;
            (acc: TResult): (list: R) => TResult
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
        reduceRightP<T, TResult, R extends T[]>(
            fn: (elem: T, acc: TResult) => TResult,
            acc: TResult,
            list: R,
        ): TResult;
        reduceRightP<T, TResult, R extends T[]>(
            fn: (elem: T, acc: TResult) => TResult,
            acc: TResult,
        ): (list: R) => TResult;
        reduceRightP<T, TResult, R extends T[]>(fn: (elem: T, acc: TResult) => TResult): {
            (acc: TResult, list: R): TResult;
            (acc: TResult): (list: R) => TResult
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
         * Defines an isomorphism that will work like a lens. It takes two functions.
         * The function that converts and the function that recovers.
         */
        lensIso: {
            (to: Function, from: Function): Function
            (to: Function): (from: Function) => Function
            from(lens: Function): Function,
        };

        /**
         * Creates a [Traversable](https://github.com/fantasyland/fantasy-land#traversable) lens
         * from an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning function.
         *
         * When executed, it maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
         * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
         * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
         * into an Applicative of Traversable.
         *
         * Dispatches to the `traverse` method of the third argument, if present.
         */
        lensTraverse(of: Function): Function;

        /**
         * Returns true if the specified object property is not equal,
         * in R.equals terms, to the given value; false otherwise.
         */
        propNotEq(prop: string | number, value: any, obj: object): boolean;
        propNotEq(prop: string | number, value: any): (obj: object) => boolean;
        propNotEq(prop: string | number): {
            (value: any, obj: object): boolean;
            (value: any): (obj: object) => boolean;
        };

        /**
         * Determines whether a nested path on an object doesn't have a specific value,
         * in R.equals terms. Most likely used to filter a list.
         */
        pathNotEq(path: Array<string | number>, value: any, obj: object): boolean;
        pathNotEq(path: Array<string | number>, value: any): (obj: object) => boolean;
        pathNotEq(path: Array<string | number>): {
            (value: any, obj: object): boolean;
            (value: any): (obj: object) => boolean;
        };

        /**
         * Checks if `value` is between `low` and up to but not including `high`.
         */
        inRange(low: number, high: number, value: number): boolean;
        inRange(low: number, high: number): (value: number) => boolean;
        inRange(low: number): {
            (high: number, value: number): boolean;
            (high: number): (value: number) => boolean;
        };

        /**
         * Returns whether or not an object has an own property with the specified name at a given path.
         */
        hasPath(path: Array<string | number>, obj: object): boolean;
        hasPath(path: Array<string | number>): (obj: object) => boolean;

        /**
         * Spreads object under property path onto provided object.
         */
        spreadPath(path: Array<string | number>, obj: object): object;
        spreadPath(path: Array<string | number>): (obj: object) => object;

        /**
         * Spreads object under property onto provided object.
         */
        spreadProp(prop: string | number, obj: object): object;
        spreadProp(prop: string | number): (obj: object) => object;

        /**
         * Flattens a property path so that its fields are spread out into the provided object.
         */
        flattenPath(path: Array<string | number>, obj: object): object;
        flattenPath(path: Array<string | number>): (obj: object) => object;

        /**
         * Flattens a property so that its fields are spread out into the provided object.
         */
        flattenProp(prop: string | number, obj: object): object;
        flattenProp(prop: string | number): (obj: object) => object;

        /**
         * Composable shortcut for `Promise.all`.
         *
         * The `allP` method returns a single Promise that resolves when all of the promises
         * in the iterable argument have resolved or when the iterable argument contains no promises.
         * It rejects with the reason of the first promise that rejects.
         */
        allP<T>(iterator: Iterator<T>): Promise<T[]>;

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
         * Composable shortcut for `Promise.then`.
         * The thenP function returns a Promise. It takes two arguments: a callback function for the success of the Promise
         * and the promise instance itself.
         */
        thenP<T>(onFulfilled: Function, thenable: Promise<T>): Promise<T>;
        thenP<T>(onFulfilled: Function): (thenable: Promise<T>) => Promise<T>;


        /**
         * Runs the given list of functions in order with the supplied object, then returns the object.
         * Also known as the normal order sequencing combinator.
         *
         * Acts as a transducer if a transformer is given as second parameter.
         */
        seq<T>(fns: Function[], x: T): T;
        sequencing<T>(fns: Function[], x: T): T; // alias

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * from fromIndex (inclusive).
         * Dispatches to the slice method of the third argument, if present.
         */
        sliceFrom<T>(fromIndex: number, list: string | T[]): string | T[];
        sliceFrom(fromIndex: number): <T>(list: string | T[]) => string | T[];

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * to toIndex (exclusive).
         * Dispatches to the slice method of the second argument, if present.
         */
        sliceTo<T>(toIndex: number, list: string | T[]): string | T[];
        sliceTo(toIndex: number): <T>(list: string | T[]) => string | T[];

        /**
         * Returns a partial copy of an array omitting the indexes specified.
         */
        omitIndexes<T>(indexes: number[], list: T[]): T[];
        omitIndexes(indexes: number[]): <T>(list: T[]) => T[];

        /**
         * Returns `true` if the supplied list or string has a length greater than `valueLength`.
         */
        lengthGt<T>(valueLength: number, list: string | T[]): boolean;
        lengthGt(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length less than `valueLength`.
         */
        lengthLt<T>(valueLength: number, list: string | T[]): boolean;
        lengthLt(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length less than or equal to
         * `valueLength`.
         */
        lengthLte<T>(valueLength: number, list: string | T[]): boolean;
        lengthLte(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length greater than or equal to
         * `valueLength`.
         */
        lengthGte<T>(valueLength: number, list: string | T[]): boolean;
        lengthGte(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length equal to `valueLength`.
         */
        lengthEq<T>(valueLength: number, list: string | T[]): boolean;
        lengthEq(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length not equal to `valueLength`.
         */
        lengthNotEq<T>(valueLength: number, list: string | T[]): boolean;
        lengthNotEq(valueLength: number): <T>(list: string | T[]) => boolean;

        /**
         *  Returns true if all items in the list are equivalent using `R.equals` for equality comparisons.
         */
        allEqual<T>(list: T[]): boolean;

        /**
         * Checks if input value is a `thenable`.
         * `thenable` is an object or function that defines a `then` method.
         */
        isThenable(val: any): boolean;

        /**
         * Checks if input value is a native `Promise`.
         * The Promise object represents the eventual completion (or failure)
         * of an asynchronous operation, and its resulting value.
         */
        isPromise(val: any): val is Promise<any>;

        /**
         * Checks if input value is the Boolean primitive `true`. Will return false for Boolean
         * objects created using the `Boolean` function as a constructor.
         */
        isTrue(val: any): boolean;

        /**
         * Checks if input value is the Boolean primitive `false`. Will return false for Boolean objects created using the `Boolean` function as a constructor.
         */
        isFalse(val: any): boolean;

        /**
         * In JavaScript, a `truthy` value is a value that is considered true
         * when evaluated in a Boolean context. All values are truthy unless
         * they are defined as falsy (i.e., except for `false`, `0`, `""`, `null`, `undefined`, and `NaN`).
         */
        isTruthy(val: any): boolean;

        /**
         * A falsy value is a value that translates to false when evaluated in a Boolean context.
         * Falsy values are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
         */
        isFalsy(val: any): boolean;

        /**
         * Returns the second argument if predicate function returns `true`,
         * otherwise the third argument is returned.
         */
        defaultWhen<DefVal, Val>(predicate: Function, defaultVal: DefVal, val: Val): DefVal | Val;
        defaultWhen<DefVal, Val>(predicate: Function, defaultVal: DefVal): (val: Val) => DefVal | Val;
        defaultWhen(predicate: Function): <DefVal, Val>(defaultVal: DefVal) => (val: Val) => DefVal | Val;

        /**
         * Y-combinator
         *
         * The Y combinator is an interesting function which only works with functional languages,
         * showing how recursion can still be done even without any variable or function declarations,
         * only functions and parameters
         */
        Y(le: Function): Function;

        /**
         * A function which calls the two provided functions and returns the complement of `&&`ing
         * the results. It returns true if the first function is false-y and the complement of the
         * second function otherwise. Note that this is short-circuited, meaning that the second
         * function will not be invoked if the first returns a false-y value. In short it will
         * return true unless both predicates return true.
         *
         * In addition to functions, `RA.notBoth` also accepts any fantasy-land compatible
         * applicative functor.
         */
        notBoth(firstPredicate: Function, secondPredicate: Function): Function;

        /**
         * A function which calls the two provided functions and returns the complement of `||`ing
         * the results. It returns false if the first function is truth-y and the complement of the
         * second function otherwise. Note that this is short-circuited, meaning that the second
         * function will not be invoked if the first returns a truth-y value. In short it will
         * return true if neither predicate returns true.
         *
         * In addition to functions, `RA.neither` also accepts any fantasy-land compatible
         * applicative functor.
         */
        neither(firstPredicate: Function, secondPredicate: Function): Function;

        /**
         * Takes a list of predicates and returns a predicate that returns true for a given list of
         * arguments if one or more of the provided predicates is not satisfied by those arguments.
         * It is the complement of Ramda's allPass.
         *
         * The function returned is a curried function whose arity matches that of the
         * highest-arity predicate.
         */
        notAllPass(predicates: Function[]): Function;

        /**
         * Takes a list of predicates and returns a predicate that returns true for a given list of
         * arguments if none of the provided predicates are satisfied by those arguments. It is the
         * complement of Ramda's anyPass.
         *
         * The function returned is a curried function whose arity matches that of the
         * highest-arity predicate.
         */
        nonePass(predicates: Function[]): Function;

        /**
         * Takes a combining predicate and a list of functions and returns a function which will map
         * the arguments it receives to the list of functions and returns the result of passing the
         * values returned from each function to the combining predicate. A combining predicate is a
         * function that combines a list of Boolean values into a single Boolean value, such as
         * `R.any` or `R.all`. It will test each value using `RA.isTruthy`, meaning the functions
         * don't necessarily have to be predicates.
         *
         * The function returned is curried to the number of functions supplied, and if called with
         * more arguments than functions, any remaining arguments are passed in to the combining
         * predicate untouched.
         */
        argsPass(combiningPredicate: Function, predicates: Function[]): Function;
        argsPass(combiningPredicate: Function): (predicates: Function[]) => Function;

        /**
         * Accepts a function with any arity and returns a function with arity of zero.
         * The returned function ignores any arguments supplied to it.
         */
        dropArgs(fn: Function): Function;

        /**
         * Creates an array with all falsy values removed.
         * The values false, null, 0, "", undefined, and NaN are falsy.
         */
        compact(list: any[]): any[];

        /**
         * Returns a new list containing the contents of the given list, followed by the given
         * element. Like {@link http://ramdajs.com/docs/#append|R.append} but with argument order
         * reversed.
         */
        appendFlipped<T>(list: T[], val: any): T[];
        appendFlipped<T>(list: T[]): (val: any) => T[];

        /**
         * Returns true if the specified value is equal, in R.equals terms,
         * to at least one element of the given list or false otherwise.
         * Given list can be a string.
         *
         * Like {@link http://ramdajs.com/docs/#contains|R.contains} but with argument order reversed.
         */
         contained<T>(list: T[], val: T): boolean;
         contained<T>(list: T[]): (val: T) => boolean;

        /**
         * Can be used as a way to compose multiple invokers together to form polymorphic functions,
         * or functions that exhibit different behaviors based on their argument(s).
         * Consumes dispatching functions and keep trying to invoke each in turn, until a non-nil value is returned.
         *
         * Accepts a list of dispatching functions and returns a new function.
         * When invoked, this new function is applied to some arguments,
         * each dispatching function is applied to those same arguments until one of the
         * dispatching functions returns a non-nil value.
         */
        dispatch(functions: Function[]): Function;

        /**
         * Returns a new list with the item at the position `fromIdx` moved to the position `toIdx`.
         * If the `toIdx` is out of the `list` range, the item will be placed at the last position
         * of the `list`. When negative indices are provided, the behavior of the move is
         * unspecified.
         */
        move<T>(fromIdx: number, toIdx: number, list: T[]): T[]
        move<T>(fromIdx: number): (toIdx: number, list: T[]) => T[]
        move<T>(fromIdx: number): {
            (toIdx: number, list: T[]): T[];
            (toIdx: number): (list: T[]) => T[];
        };

        /**
         * Identity type.
         */
        Identity: Function;
    }

}

export = RA;
