
const JsUser = {
  fname :'ritesh',
  lname: 'jain',
  age : 25,
  location : 'gurugram',
  email : 'rj4380790@gmail.com',
  skills : ['HTML','CSS','JS','Bootstrap','React.Js','NodeJS','MongoDb','ExpressJS', 'MYSQL'],
}
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
Object.freeze(JsUser);
// console.log(JsUser['email']);
// console.log(JsUser.email);

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({}, obj1, obj2);
// const obj4 = {...obj1,...obj2};
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);
// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));


const course = {
  courseName : "Javascript full course",
  coursePrice : 999,
  CourseInstructor : "Hitesh",
  channelName : 'Chai Or Code',
}


// {
//   "courseName" : "Javascript full course",
//   "coursePrice" : 999,
//   "CourseInstructor" : "Hitesh",
//   "channelName" : 'Chai Or Code',
// }


const {CourseInstructor :  instructor} = course;
console.log(instructor);