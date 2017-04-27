import fl from 'fantasy-land';

import { functorTrait, applyTrait } from './traits';


class Left {
  static of(value) {
    return new Left(value);
  }

  static [fl.of](value) {
    return Left.of(value);
  }

  constructor(value) {
    this.value = value;
  }

  isLeft() { // eslint-disable-line class-methods-use-this
    return true;
  }

  isRight() { // eslint-disable-line class-methods-use-this
    return false;
  }

  cata(leftFn) {
    return leftFn(this.value);
  }

  either(leftFn) {
    return this.cata(leftFn);
  }

  ap() {
    return this;
  }

  [fl.ap]() {
    return this.ap();
  }

  map() {
    return this;
  }

  [fl.map]() {
    return this.map();
  }
}

class Right {
  static of(value) {
    return new Right(value);
  }

  static [fl.of](value) {
    return Right.of(value);
  }

  constructor(value) {
    this.value = value;
  }

  isLeft() { // eslint-disable-line class-methods-use-this
    return false;
  }

  isRight() { // eslint-disable-line class-methods-use-this
    return true;
  }

  cata(leftFn, rightFn) {
    return rightFn(this.value);
  }

  either(leftFn, rightFn) {
    return this.cata(leftFn, rightFn);
  }

  ap(applyWithFn) {
    return applyTrait.ap.bind(this)(applyWithFn);
  }

  [fl.ap](applyWithFn) {
    return this.ap(applyWithFn);
  }

  map(fn) {
    return functorTrait.map.bind(this)(fn);
  }

  [fl.map](fn) {
    return this.map(fn);
  }
}

class Either {
  static of(value) {
    return Right.of(value);
  }

  static Left(value) {
    return Left.of(value);
  }

  static Right(value) {
    return Right.of(value);
  }

  constructor() {
    throw new Error('Cannot directly instantiate Either');
  }
}

export default Either;
