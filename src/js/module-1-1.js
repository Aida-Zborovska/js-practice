//!======================================================
// TASK№1
function greet() {
  console.log(this);
}

const person = {
  name: 'Olga',
  sayHi: greet,
};

const ref = person.sayHi;
ref();
//!======================================================

//!======================================================
// TASK№2
const obj = {
  name: 'Test',
  method: function () {
    console.log(this);
    return () => {
      console.log(this);
    };
  },
};

const arrow = obj.method();
arrow();
//!======================================================
//!======================================================
// TASK№3
function whoIsThis() {
  console.log(this);
}

const bound = whoIsThis.bind({ name: 'Bound context' });

const callLater = fn => fn();

callLater(bound);
//!======================================================
//!======================================================
// TASK№4
const user = {
  name: 'Alice',
  showName: function () {
    console.log(this.name);
  },
};

setTimeout(user.showName, 100);
//!======================================================
//!======================================================
// TASK№5
function showThis(a, b) {
  console.log(this, a, b);
}

showThis.call({ x: 10 }, 1, 2);
showThis.apply({ x: 20 }, [3, 4]);
//!======================================================
//!======================================================
// TASK№6
const name = 'Global';

const obj = {
  name: 'Object',
  show: function () {
    console.log(this.name);
    const nested = function () {
      console.log(this.name);
    };
    nested();
  },
};

obj.show();
//!======================================================
//!======================================================
// TASK№7
const a = {
  name: 'A',
  say: function () {
    console.log(this.name);
  },
};

const b = {
  name: 'B',
};

const sayFromA = a.say;
sayFromA.call(b);
//!======================================================

//!======================================================
// TASK№8
const obj = {
  name: 'Nested',
  outer: function () {
    return {
      inner: () => {
        console.log(this.name);
      },
    };
  },
};

const innerFn = obj.outer().inner;
innerFn();
//!======================================================

//!======================================================
// TASK№9
const obj = {
  method: function () {
    console.log(this);
  },
};

const other = {
  method: obj.method,
};

const copy = other.method;
copy();
//!======================================================

//!======================================================
// TASK№10
function A() {
  this.name = 'Function A';
  return {
    name: 'Returned Object',
    getThis: function () {
      console.log(this.name);
    },
  };
}

const result = new A();
result.getThis();
