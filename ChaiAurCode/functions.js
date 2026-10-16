
const user = {
  username : 'ritesh jain',
  age : 25,
}
function handleObject(anyObject){
  console.log(`name is ${anyObject.username} and age is ${anyObject.age}`)
}
// handleObject(user);
handleObject({
  username : 'mr. ritesh jain',
  age : 25,
})



const myNewArray = [100,200,300,400];
function returnArray(getArray){
  return getArray[2];
}
console.log(myNewArray);
console.log([100,200,300,400,500]);