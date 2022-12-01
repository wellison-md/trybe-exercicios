/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let booksPage = 208;
let readPages = 4;
let timeInMinutes = 2;
let totalTime = (booksPage/readPages) * timeInMinutes;

console.log(`Ana levará ${totalTime} minutos para ler o livro todo`);
