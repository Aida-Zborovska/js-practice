//======================== Основи ===========================
// 1.
const person = {
  name: 'Anna',
  age: 45,
  profession: 'driver',
};

// 2.
//console.log(person);

// 3.
person.age = 46;
//console.log(person.age);

// 4.
person.workPlace = 'AnnaDelivery';
//console.log(person);

// 5.
delete person.profession;
//console.log(person);

// 6.
// console.log(person.profession);
// console.log(person.age);

// 7.
const friend = {
  name: 'Nemo',
  age: 40,
  profession: 'captain of Nautilus',
  location: 'Nautilus',
  ...person,
};
// console.log(friend);

// 8.
function logObjectProperties(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} - ${obj[keys[i]]}`);
  }
}
//logObjectProperties(person);

// 9.
person.sayHello = function () {
  console.log(`Hello, ${this.name}!`);
};
// person.sayHello();

// 10.
// console.log(Object.keys(person));
// console.log(Object.entries(person));
// const fruits = ['apple', 'orange', 'banana'];
// const a = fruits.entries();
// console.log(a);

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(Salami) {
  console.log(`Delivering pizza ${Salami}`);
});
