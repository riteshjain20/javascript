const fullname = 'Ritesh  jain'
const fname = 'ritesh';
const lname = 'jain';
const url = 'https://ritesh%20jain.com';
console.log(`${fname} ${lname}`);
console.log(fname[0]);
console.log(fullname.length);
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
console.log(fullname.charAt(4));
console.log(fullname.indexOf('t'));
console.log(fullname.substring(0,4));
console.log(fullname.slice(8,4));
console.log(fullname.trim());
console.log(url.replace('%20','-'));
console.log(url.includes('jain'));
console.log(fullname.split('-'));


