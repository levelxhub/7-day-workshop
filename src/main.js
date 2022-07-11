  var firstInput = document.getElementById('firstNumber');
  var secondInput = document.getElementById('secondNumber');
  var result = document.getElementById('result');




function add(){
  // alert('Addition clicked')
  var firstNumber = parseInt(firstInput.value);
  var secondNumber = parseInt(secondInput.value);
  result.value = firstNumber + secondNumber;
}

function sub(){
  // alert('Substraction clicked')
  var firstNumber = parseInt(firstInput.value);
  var secondNumber = parseInt(secondInput.value);
 result.value = firstNumber - secondNumber;
}

function multiply(){
  // alert('Multiplication clicked')
  var firstNumber = parseInt(firstInput.value);
  var secondNumber = parseInt(secondInput.value);
  result.value = firstNumber * secondNumber;
}

function divide(){
  // alert('Division clicked')
  var firstNumber = parseInt(firstInput.value);
  var secondNumber = parseInt(secondInput.value);
  result.value = firstNumber / secondNumber;
}

function reset(){
  // alert('Clear clicked')
  firstInput.value = 0;
  secondInput.value = 0;
  result.value = 0;
}
