// Add your code here

let number1 = 8;
let number2 = 6;
let number3 = 4;
let number4 = 2;

let sum = number1 + number2;
let difference = number4 - number3;
let finalResult = sum * difference;

let evenOddResult = finalResult % 2 === 0 ? 0 : 1;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);