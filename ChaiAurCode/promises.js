// const promiseone = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log('async task is completed');
//     resolve();
//   }, 2000);
// })
// promiseone.then(()=>{
//   console.log('promise resolve');
// });



// new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log('async task 2 completed');
//     resolve();
//   }, 2000);
// }).then(()=>{
//   console.log('promise 2 resolve');
// });



// const promisethree = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log('async task 3 is completed');
//     resolve({username : 'ritesh', email : 'rj4380790@gmail.com'});
//   }, 2000);
// })
// promisethree.then((user)=>{
//   console.log('promise 3 resolve');
//   console.log(user);
// });



// const promisefour = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     let error = false;
//     if(!error){
//       resolve({username : 'ritesh', email : 'rj4380790@gmail.com'});
//     }else{
//       reject('ERROR !!')
//     }
//   }, 2000);
// })
// promisefour.then((user)=>{
//   console.log('promise 4 resolve');
//   console.log(user);
//   return user.username;
// }).then((username)=>{
//   console.log(username);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//   console.log('promise 4 is finally resolved')
// })




// const promisefive = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     let error = false;
//     if(!error){
//       resolve({username : 'ritesh jain', email : 'rj4380790@gmail.com'});
//     }else{
//       reject('ERROR !!')
//     }
//   }, 2000);
// });
// async function promisefivefn() {
//   try {    
//       const response = await promisefive;
//       console.log(response)
//   } catch (error) {
//     console.log(error);
//   }
// }
// promisefivefn();


// async function getUsers(){
//   try {    
//     const response = await fetch('https://api.github.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();


fetch('https://api.github.com/users').then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  return error;
});