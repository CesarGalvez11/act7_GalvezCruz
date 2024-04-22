
// Add your code here
const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Corrige la capitalización de la cita
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase();

// Reemplaza "huevos verdes con jamón" con otro alimento que no te guste
const replacedQuote = fixedQuote.replace('green eggs and ham', 'brussels sprouts');

// Agrega un punto al final de la cita
const finalQuote = replacedQuote + '.';
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);