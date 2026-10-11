let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let result = '';
// Convert the button collection into an array
let arr = Array.from(buttons);
// Run this function for every button
arr.forEach(button => {
  // Listen for a click on this button
  button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
      result = eval(result);
      input.value=result;
    }
    else if(e.target.innerHTML == 'AC'){
      result = '';
      input.value = result;
    }
    else if(e.target.innerHTML == 'DEL'){
      // Remove the last character
      result = result.substring(0,result.length-1);
      // Update the screen
      input.value = result;
    }
    else{
      // For numbers, operators and decimal point
      result +=e.target.innerHTML;
      input.value = result;
    }
  })
})
