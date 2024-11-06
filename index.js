const calculateBtn = document.getElementById('calculateBtn');
const sumText = document.getElementById('sum');
const avgText = document.getElementById('average');

function calculateTotal(a, b, c, d) {
 return a + b + c + d;
}

function calculateAverage(total, count) {
 return total / count;
}

function handleButtonClick() {
 let num1 = document.getElementById('num1').value;
 let num2 = document.getElementById('num2').value;
 let num3 = document.getElementById('num3').value;
 let num4 = document.getElementById('num4').value;

 let total = calculateTotal(num1, num2, num3, num4);
 let average = calculateAverage(total, 4);

 sumText.textContent = `The sum is ${total}`;
 avgText.textContent = `The average is: ${average}`;
}

calculateBtn.addEventListener('click', handleButtonClick);