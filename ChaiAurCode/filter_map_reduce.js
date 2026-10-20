
const myArr = [10,20,30,40,50,60,70,80,90];

// const newarr = myArr.filter((item)=>{ 
//   return item > 40})
// console.log(newarr);


let books = [
  {
    languageName : 'HTML',
    languageExtension : 'html',
    publish : 1991,
    edition : 2004
  },
  {
    languageName : 'CSS',
    languageExtension : 'css',
    publish : 1985,
    edition : 2009
  },
  {
    languageName : 'Javascript',
    languageExtension : 'js',
    publish : 1970,
    edition : 2015
  },
  {
    languageName : 'ReactJS',
    languageExtension : 'jsx',
    publish : 1999,
    edition : 2016
  },
  {
    languageName : 'NodeJS',
    languageExtension : 'js',
    publish : 1982,
    edition : 2017
  },
  {
    languageName : 'Python',
    languageExtension : 'py',
    publish : 1961,
    edition : 2019
  },
  {
    languageName : 'Java',
    languageExtension : 'java',
    publish : 1980,
    edition : 2006
  },
];

// const techbooks = books.filter((item)=>{
//   return item.languageExtension === 'js'
// });

// const techbooks = books.filter((item)=> item.publish >= 1990)

// console.log(techbooks);






const myNumbers = [10,20,30,40,50,60,70];

// const newNumber = myNumbers.map((num)=>{
//   return num+1
// })

// const newNum  = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=500);


// const newNum  = myNumbers.reduce((acc,currVal)=>{
//   console.log(`acc: ${acc} and current value : ${currVal}`)
//   return acc + currVal
// },0)

// console.log(newNum);


let shoppingCart = [
  {
    itemName : 'JS COURSE',
    price : 999
  },
  {
    itemName : 'Frontend COURSE',
    price : 1999
  },
  {
    itemName : 'HTML COURSE',
    price : 499
  },
  {
    itemName : 'Backend COURSE',
    price : 2999
  },
]

const result = shoppingCart.reduce((acc,currval)=>{return acc+currval.price},0)
console.log(result);