
let myDate = new Date();
let customDate = new Date(2026, 8, 20, 6, 4);
let customDate2 = new Date('2024-05-24')
let myTimeStamp = Date.now();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(customDate.toString());
console.log(customDate2.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.toLocaleString('default',{
  weekday: 'long',
}));