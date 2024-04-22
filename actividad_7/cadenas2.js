
// Add your code here
const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Recupera la longitud de la cita
const quoteLength = quote.length;

// Busca la posición del índice donde aparece substring en quote
const index = quote.indexOf(substring);

// Usa slice para recortar la cita original a la frase deseada
const revisedQuote = quote.slice(0, index) + 'No me gustan los huevos verdes y el jamón';

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);