
// Data Types - Primitive , Non-Primitive 
// Primitive  - 7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitive (refrence type) - Array, Object, Functions


// string ='';
// number = 1;
// boolan = true/false;

// let name = 'ritesh';
// let age = 25;
// let isTrue = true;
// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(isTrue));

// let score = '33a';
// let randomNumber = 34;
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(typeof randomNumber);


// Operation---------------

// let value = 3;
// let negetiveValue = -value;
// console.log(negetiveValue);
// console.log(1+2+'2');
// console.log('1'+2+2);


// Comparison-------------------

// console.log(null > 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log(null >= 0);
// console.log(null <= 0);


// const id =  Symbol('123');
// const anotherid =  Symbol('123');
// console.log(id === anotherid);

// const bigNumber = 23523452353435n;
// console.log(typeof bigNumber);


// const heros = ['shaktiman', 'naagraj', 'doga'];

// let myobj = {
//   name: 'ritesh',
//   age:25,
// }
// const myFunc = function(){
//   console.log('hello world');
// }
// console.log(typeof myFunc);


// Memory------------------------

// Stack Memory(Primitive), 
// Heap Memory(Non-Primitive) 

let myYotubeName = 'ritesh';
let anotherName =  myYotubeName;
anotherName = 'ritesh jain';
console.log('original value : ' + myYotubeName);
console.log('duplicate value : ' + anotherName);

let user = {
  email : 'rj4380790@gmail.com',
  phone : '8570036400'
}
let user2 = user;
user2.email = 'r.ritesh.jain@accenture.com';
console.log('original value : ' + user.email);
console.log('duplicate value : ' + user2.email);
