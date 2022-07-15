var firstNumber = document.querySelector('#n1');
var secondNumber = document.querySelector('#n2');
var operator = document.querySelector('#operator');
var result = document.querySelector('#result');

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.innerText;
    if (value === '=') return calculate();
    if (value === 'AC') return clear();
    if (value === 'C') return undo();
    if (value === '%') return percentage();
    return display(value);
  });
});

function percentage() {
  secondNumber.innerText = secondNumber.innerText / 100;
  return calculate();
}

function calculate() {
  const inputs = document.querySelector('.inputs');

  const first = firstNumber.innerText;
  const second = secondNumber.innerText;
  const op = operator.innerText;
  const expression = `${first} ${op === 'x' ? '*' : op} ${second}`;
  // format with 2 decimal places if  it has a decimal
  const executed = Number(eval(expression)).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  if (!executed) return;

  inputs.classList.remove('lg');

  return (result.innerText = executed);
}

function display(value) {
  const inputs = document.querySelector('.inputs');
  result.innerText = '';
  inputs.classList.add('lg');

  if (value === '+' || value === '-' || value === 'x' || value === '/')
    return (operator.innerText = value);

  if (operator.innerText !== '') return (secondNumber.innerText += value);

  return (firstNumber.innerText += value);
}

function undo() {
  if (secondNumber.innerText.length > 0)
    return (secondNumber.innerText = secondNumber.innerText.slice(0, -1));
  if (operator.innerText.length > 0)
    return (operator.innerText = operator.innerText.slice(0, -1));
  if (firstNumber.innerText.length > 0)
    return (firstNumber.innerText = firstNumber.innerText.slice(0, -1));
}

function clear() {
  firstNumber.innerText = '';
  secondNumber.innerText = '';
  operator.innerText = '';
  result.innerText = '';
}
