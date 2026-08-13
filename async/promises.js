// let taskDone = true;
// let pr = new Promise(function(resolve,reject){
//   if(taskDone){
//     resolve('task Done');
//   }else{
//     reject('task reject');
//   }
// })
// console.log(pr);


// function promisefunc(taskDone){
//   return new Promise(function(resolve, reject){
//     if(taskDone){
//       resolve('task done');
//     }else{
//       reject('task reject');
//     }
//   })
// }
// console.log(promisefunc(true));




// function promisefunc(taskDone){
//   return new Promise(function(resolve, reject){
//     if(taskDone){
//       resolve('task done');
//     }else{
//       reject('task reject');
//     }
//   })
// }
// let onsuccess = (result)=>{
//   console.log(result);
// }
// let onfailed = (error)=>{
//   console.log(error);
// }
// setTimeout(()=>{
//   promisefunc(false).then(onsuccess).catch(onfailed);
// },3000);


// function promisecalcfunc(x,y){
//   return new Promise(function(resolve, reject){
//     let sum = x+y;
//     setTimeout(()=>{
//       if((x,y)){
//         resolve (`sum is ${sum}`);
//       }else{
//         reject(`failed to calculate`);
//       }
//     },1000)
//   })
// }
// promisecalcfunc(10,2).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error)
// })


// function promisefunc(){
//   return new Promise(function(resolve, reject){
//     setTimeout(()=>{
//       $.get('https://jsonplaceholdter.typicode.com/posts',function(data){
//         console.log(data);
//       }).fail((error)=>{
//         console.log('failed to fetch data');
//       })
//     },3000)
//   })
// }
// promisefunc().then((result)=>{
//   consol.log(result);
// }).catch((error)=>{
//   console.log(error);
// })



// let p1 = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     console.log('1st promise');
//     resolve(10);
//   },2000)
// })
// let p2 = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     console.log('2nd promise');
//     reject('promise reject');
//   },2000)
// })
// let p3 = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     console.log('3rd promise');
//     resolve(30);
//   },2000)
// })
// Promise.all([p1,p2,p3]).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })



// let callpromisefunc = function(value, msg){
//   return function(resolve, reject){
//     setTimeout(() => {
//       console.log(`${msg} promise has been resolve`);
//       resolve(value);
//     }, value*100);
//   }
// }
// let p1 = new Promise(callpromisefunc(10,'First'));
// let p2 = new Promise(callpromisefunc(20,'Second'));
// let p3 = new Promise(callpromisefunc(30,'Third'));
// let sum = 0;
// Promise.all([p1,p2,p3]).then((result)=>{
//   for(let i in result){
//     sum = sum + result[i]
//   } 
//   console.log(result);
//   console.log(`sum is ${sum}`);
// }).catch((error)=>{
//   console.log(error);
// });



