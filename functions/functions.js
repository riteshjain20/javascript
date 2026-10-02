// function greet(){
//   console.log('hello world');
// }
// greet();
// // ------------------------------------------


// function welcome(){
//   console.log('welcome to javascript');
// }
// welcome();
// // ------------------------------------------


// function myName(){
//   let name = 'ritesh jain';
//   console.log(`Hello ${name}`);
// }
// myName();
// // ------------------------------------------


// function printNumbers(){
//   for(let i=1;i<=10;i++){
//     console.log(i);
//   }
// }
// printNumbers();


// function printNumbers(){
//   let i = 1;
//   while(i<=10){
  //     console.log(i);
  //     i++;
  //   }
  // }
  // printNumbers();


  // function printNumbers(){
  //   let i = 1;
  //   do{
  //     console.log(i);
  //     i++;
  //   }while(i<=10)
  // }
  // printNumbers();
  // ------------------------------------------


  // function printReverse(){
  //   for(let i = 10;i>=1;i--){
  //     console.log(i);
  //   }
  // }
  // printReverse();


  // function printReverse(){
  //   let i = 10;
  //   while(i>=1){
  //     console.log(i);
  //     i--;
  //   }
  // }
  // printReverse();


  // function printReverse(){
  //   let i = 10;
  //   do{
  //     console.log(i);
  //     i--;
  //   }while(i>=1)
  // }
  // printReverse();
  // ------------------------------------------


  // function printEven(){
  //   for(let i = 2;i<=20;i+=2){
  //     console.log(i);
  //   }
  // }
  // printEven();

  // function printEven(){
  //   let i = 2;
  //   while(i<=20){
  //     console.log(i);
  //     i+=2;
  //   }
  // }
  // printEven();

  // function printEven(){
  //   let i = 2;
  //   do{
  //     console.log(i);
  //     i+=2;
  //   }while(i<=20)
  // }
  // printEven();

  // ------------------------------------------

  // function addNumbers(){
  //   let a = 10;
  //   let b = 20;
  //   let sum = a+b;
  //   console.log(sum);
  // }
  // addNumbers();

  // ------------------------------------------
  // function checkEvenOdd(){
  //   let num = 17;
  //   if(num%2===0){
  //     console.log(`even number`);
  //   }else{
  //     console.log(`odd number`);
  //   }
  // }
  // checkEvenOdd();


  // ------------------------------------------

  // function checkPositiveNegative(){
  //   let num = -10;
  //   if(num>0){
  //     console.log(`positive number`);
  //   }
  //   else if(num<0){
  //     console.log(`negetive number`);
  //   }
  //   else{
  //      console.log(`zero`);
  //    }
  // checkPositiveNegative();

  // ------------------------------------------

  // function printDivisible(){
  //   for(let i=3;i<=50;i+=3){
  //     console.log(i);
  //   }
  // }
  // printDivisible();

  // Q1. Create a function greet(name) that prints:------------------------------------------
  
  // function greet(name){
  //   console.log(`${name}`);
  // }
  // greet('ritesh');
  
  
  // function greet(name){
  //   return name;
  // }
  // console.log(greet('ritesh'));
  
  // Q2. Create square(num) that prints the square of a number.------------------------------------------

  // function square(num){
  //   return num*num;
  // }
  // console.log(square(7));

  // Q3. Create cube(num) that prints the cube.------------------------

  // function cube(num){
  //   return num*num*num;
  // }
  // console.log(cube(3));


  // Q4. Create double(num) that prints double the number.------------

  // function double(num){
  //   console.log(`${num*2}`);
  // }
  // double(15);


  // Q5. Create half(num) that prints half the number.--------------

  // function half(num){
  //   console.log(num/2);
  // }
  // half(10);

  // Q6. Create:------------------------

  // function add(a,b){
  //   return sum = a+b;
  // }
  // console.log(add(20,10));

  // Q7-------------------

  // function subtract(a,b){
  //   return subtract = a-b;
  // }
  // console.log(subtract(20,10));

  // Q8---------------------

  // function multiply(a,b){
  //   return multiply = a*b;
  // }
  // console.log(multiply(20,10));

  // Q9-----------------------

  // function divide(a,b){
  //   return divide = a/b;
  // }
  // console.log(divide(20,10));

  // Q10----------------------------

  // function remainder(a,b){
  //   return remainder = a%b;
  // }
  // console.log(remainder(20,8));


  // Q11. Create oddEven(num) that prints whether the number is odd or even.

  // function OddEven(num){
  //   if(num%2===0){
  //     return `Even Number`;
  //   }else{
  //     return `Odd Number`
  //   }
  // }
  // console.log(OddEven(31));

  // Q12. Create positiveNegative(num).-----------

  // function positiveNegative(num){
  //   if(num > 0){
  //     console.log('positive number');
  //   } else if(num<0){
  //     console.log(`Negetive number`);
  //   }else{
  //     console.log(`Zero`);
  //   }
  // }
  // positiveNegative(-99);


// ------------------------------------------

// function calculate(a,b,c){
//   return a+b+c;
// }
// console.log(calculate(10,20,30));


// function calculate(a,b,c){
//   return a*b*c;
// }
// console.log(calculate(10,20,3));


// function average(a,b,c){
//   return (a+b+c)/3;
// }
// console.log(average(10,20,40));


// function largest(a,b,c){
//   if(a>=b && a>=c){
//     return `${a} is largest`; 
//   }
//   else if(b>=c && b>=a){
//     return `${b} is largest`; 
//   }
//   else{
//     return `${c} is largest`; 
//   }
// }
// console.log(largest(10,54,99));


// function smallest(a,b,c){
//   if(a<=b && a<=c){
//     return `${a} is smallest`; 
//   }
//   else if(b<=c && b<=a){
//     return `${b} is smallest`; 
//   }
//   else{
//     return `${c} is smallest`; 
//   }
// }
// console.log(smallest(10,54,99));

// function calculateBill(price,quantity,discount){
//   let total = price*quantity;
//   let finalAmount = total - discount;
//   return finalAmount;
// }
// console.log(calculateBill(500,10,200));


// function studentResult(name, marks1, marks2, marks3){
//   let total = marks1+marks2+marks3;
//   let percentage = Math.round((total/300)*100);
//   console.log(`${name} has scored ${total} marks and ${percentage} percent`)
// }
// studentResult('Ritesh',90,89,78);


// function calculateSalary(basic,bonus,tax){
//   return total = basic + bonus - tax;
// }
// console.log(calculateSalary(50000,10000,799));


// function checkTriangle(a,b,c){
//   if(a + b > c && a + c > b && b + c > a){
//     return `this is  traingle`;
//   }
//   else{
//     return `this is not a triangle`;
//   }
// }
// console.log(checkTriangle(3,4,5));


// function calculator(a,b,operator){
//   if(operator === '+'){
//     return a+b;
//   }else if(operator === '-'){
//     return a-b;
//   }else if(operator === '*'){
//     return a*b;
//   }else if(operator === '/'){
//     return a/b;
//   }else {
//     return "Invalid operator";
//   }
// }
// console.log(calculator(20,5,'+'));
// console.log(calculator(20,5,'-'));
// console.log(calculator(20,5,'*'));
// console.log(calculator(20,5,'/'));

// ------------------------------------------

// function greet(name = 'Ritesh'){
//   console.log(`Hello ${name}`);
// }
// greet();


// function calculatePrice(price, tax = 18){
//   console.log(`price of item is ${price} and tax is ${tax}`);
// }
// calculatePrice(10000);


// function power(num, exponent=2){
//   let result = 1;
//   for(let i=1; i<=exponent;i++){
//     result = result *num;
//   }
//   return result;
// }
// console.log(power(5,2));
// console.log(power(7,3));
// console.log(power(3,5));


// function multiply(a,b=2){
//   return a*b
// }
// console.log(multiply(4));


// function createUser(name= 'Guest', age=18){
//   return `this name is ${name} and age is ${age}`;
// }
// console.log(createUser());


// function calculateBill(price, quantity = 1, discount = 0){
//   let total = price*quantity - discount;
//   return total;
// }
// console.log(calculateBill(500));
// console.log(calculateBill(500,3));
// console.log(calculateBill(500,3,200));


// function calculateSalary(basic, bonus = 0, tax = 0){
//   return basic + bonus - tax;
// }
// console.log(calculateSalary(500000));


// function rectangleArea(length, width = length){
//   return length * width;
// }
// console.log(rectangleArea(5));
// console.log(rectangleArea(5,10));


// function calculateInterest(principal, rate = 5, time = 1){
//   let SI = (principal * rate *time) / 100;
//   return SI;
// }
// console.log(calculateInterest(10000));


// function student(name = "Unknown", marks = 0, total = 100){
//   let percentage = (marks/total)*100;
//   return `${percentage}`;
// }
// console.log(student('ritesh', 90, 100));

// ---------------------------------------


// let add = function(a,b){
//   return a+b;
// }
// console.log(add(10,20));


// let checkAge = function(age){
//   if(age>=18){
//     return 'You are eligible to vote';
//   }else{
//     return 'not eligible to vote';
//   }
// }
// console.log(checkAge(23));


// let factorial = function(num){
//   let fact = 1;
//   for(i=1;i<=num;i++){
//     fact = fact*i;
//   }
//   return fact;
// }
// console.log(factorial(5));

// -----------------------------------------------------------------------

// const formatName = function(name){
//   return name.toUpperCase();
// }
// console.log(formatName('ritesh'));


// const calculator = {
//   add : function(a,b){
//     return a+b;
//   },
//   subtract : function(a,b){
//     return a-b;
//   },
//   multiply : function(a,b){
//     return a*b;
//   },
//   divide : function(a,b){
//     return a/b;
//   },
// }
// console.log(calculator.add(10,20));
// console.log(calculator.subtract(100,20));
// console.log(calculator.multiply(10,20));
// console.log(calculator.divide(100,20));


// const celsiusToFahrenheit = function(celsius){
//   return fahrenheit = (celsius * 9/5) + 32
// }
// console.log(celsiusToFahrenheit(38));


// const validatePassword = function(password) {
//   if (password.length < 8){
//     return `password must be atleast 8 characters`;
//   }else {
//     return `true`;
//   }
// }
// console.log(validatePassword('riteshjain'));


// const isInRange = function(num, min, max){
//   if(num >= min && num<= max){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isInRange(20,10,29));


// const getGrade = function(marks){
//   if(marks >= 90){
//     return 'A';
//   }
//   else if(marks >= 80 && marks < 90){
//     return 'B';
//   }
//   else if(marks >= 70 && marks < 79){
//     return 'C';
//   }
//   else if(marks >= 60 && marks < 69){
//     return 'D';
//   }
//   else{
//     return 'Fail';
//   }
// }
// console.log(getGrade(88));


// const calculateShipping = function(weight) {
//   if(weight <= 1){
//     return `50$`;
//   }
//   else if(weight >1 && weight <= 5){
//     return `100$`;
//   }
//   else if(weight > 5){
//     return `200$`;
//   }
//   else{
//     return `Invalid weight`;
//   }
// }
// console.log(calculateShipping(8));


// const login = function(username, password) {
//   if(username === 'admin' && password === '1234'){
//     return `Login Successful`;
//   }else{
//     return `Invalid credentials`;
//   }
// }
// console.log(login('ritesh','1234'));
// console.log(login('admin','1234'));


// const calculateElectricityBill = function(units) {
//   if(units > 0 && units <=100){
//     return units * 5;
//   }
//   else if(units > 101 && units <=200){
//     return units * 7;
//   }
//   else if(units > 200){
//     return units * 10;
//   }
//   else {
//     return `Invalid units`;
//   }
// }
// console.log(calculateElectricityBill(89));


// const getBMICategory = function(weight, height) {
//   let BMI =  weight / (height * height);
//   if(BMI < 18.5){
//     return `You are Underweight`;
//   }else if(BMI >= 18.5 && BMI < 25){
//     return `You are Normal weight`;
//   }else if(BMI >= 25 && BMI < 30){
//     return `You are Overweight`;
//   }else if(BMI >= 30){
//     return `You are Obese`;
//   }
// }
// console.log(getBMICategory(73,1.71));


// const sumOfDigits = function(num) {
//   let sum = 0;
//   for(;num>0; num=Math.floor(num/10)) {
//     let lastDigit = num%10;
//     sum = sum+lastDigit;
//   }
//   return sum;
// }
// console.log(sumOfDigits(1234));


// const reverseNumber = function(num){
//   let reverse = 0
//   let sum = 0;
//   for(;num>0;num=Math.floor(num/10)){
//     let lastDigit = num%10;
//     sum = sum+lastDigit;
//     reverse = reverse*10 + lastDigit;
//   }
//   return reverse;
// }
// console.log(reverseNumber(1234));


// const factorial = function(num) {
//   let fact = 1;
//   for(let i = 1; i<=num; i++){
//     fact = fact*i;
//   }
//   return fact;
// }
// console.log(factorial(5));


// const user = {
//   name : 'Ritesh',
//   greet : function(name){
//     console.log(`Helloo ${name}`)
//   }
// }
// user.greet(user.name);


// const operations = [
//   function add(a,b){
//     return a+b;
//   },
//   function add(a,b){
//     return a-b;
//   },
//   function add(a,b){
//     return a*b;
//   }
// ]
// console.log(operations[0](50,10));
// console.log(operations[1](50,10));
// console.log(operations[2](50,10));


// const operations = {
//   add: function(a, b) {
//     return a+b;
//   },
//   subtract: function(a, b) {
//     return a-b;
//   },
//   multiply: function(a, b) {
//     return a*b;
//   },
//   divide: function(a, b) {
//     return a/b;
//   }
// };
// console.log(operations.add(20,10));
// console.log(operations.subtract(20,10));
// console.log(operations.multiply(20,10));
// console.log(operations.divide(20,10));