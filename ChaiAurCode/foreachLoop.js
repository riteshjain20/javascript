
let arr = ['javascript', 'reactjs','nodejs','expressjs','mongodb'];

// arr.forEach( function(item) {
//   console.log(item);
// });


// arr.forEach((item, index, arr)=>{
//   console.log(item, arr, index);
// });


// function printMe(item){
//   console.log(item);
// }
// arr.forEach(printMe);



let coding = [
  {
    languageName : 'HTML',
    languageExtension : 'html'
  },
  {
    languageName : 'CSS',
    languageExtension : 'css'
  },
  {
    languageName : 'Javascript',
    languageExtension : 'js'
  },
  {
    languageName : 'ReactJS',
    languageExtension : 'jsx'
  },
];
coding.forEach((item,index,arr)=>{
  console.log(item.languageExtension);
});