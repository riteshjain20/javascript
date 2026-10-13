
let arr = ['HTML','CSS','JS','Bootstrap','React.Js','NodeJS','MongoDb','ExpressJS'];
let arr2 = arr;
// arr[3] = 'Jquery';
console.log(arr);
// console.log(arr2);
// console.log(arr[1]);

// arr.push('NextJS');
// console.log(arr);

// arr.pop();
// console.log(arr);

arr.unshift('php');
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes('CSS'));
console.log(arr.indexOf('JS'));
console.log('')

const newArray = arr.join();
console.log(arr);
console.log(newArray);
console.log(typeof newArray);