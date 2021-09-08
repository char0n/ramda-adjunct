import { curry } from 'ramda';

/**
 * Adds a value to a map if the map does not already have something at key otherwise updates an existing value at key.
 *
 * @func upsert
 * @memberOf RA
 * @category Object
 * @since
 * @sig  k -> (() -> String) -> (() -> String) -> [k, v]
 * @param {string} key The key at which to update or insert the value
 * @param {Function} update The function to generate the value if key exists
 * @param {Function} insert The function to generate the value if key does not exist
 * @param {(Array|Object|Map)} collection The collection into which the value is inserted or updated
 * @return {(Array|Object|Map)} The collection into which the value has been inserted or updated
 * @see
 * @example
 *
 * RA.upsert('key', () => 'new value', () => 'initial value', {});
 * //=> {key: 'initial value'}
 */

 const upsert = curry((key, update, insert, collection) => {
   const type = Object.prototype.toString.call(collection);
   switch (type) {
     case "[object Array]":
       if (collection[key]) {
         collection[key] = update();
       } else {
         collection[key] = insert();
       }
       return collection;
       break;
     case "[object Object]":
       if (collection[key]) {
         collection[key] = update();
       } else {
         collection[key] = insert();
       }
       return collection;
       break;
     case "[object Map]":
       if (collection.get(key)) {
         collection.set(key, update());
       } else {
         collection.set(key, insert());
       }
       return collection;
       break;
     default:
       return;
   }
 });

export default upsert;
