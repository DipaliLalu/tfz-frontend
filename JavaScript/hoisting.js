'use strict';

function foo() {
  console.log(this);
}

function callFoo(fn) {
  fn();
}

let obj = { foo };

callFoo(obj.foo);

