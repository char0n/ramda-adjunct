import assert from 'assert';
import { toString } from 'ramda';


export default function eq(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(toString(actual), toString(expected));
}
