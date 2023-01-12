/*
 Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
*/

const a = Math.floor(Math.random() * 99);
const b = Math.floor(Math.random() * 99);
const c = Math.floor(Math.random() * 99);

console.log(`Valores\nA = ${a}\nB = ${b}\nC = ${c}\n`);

if (a > b && a > c) {
  console.log(`${a} é o maior`);
} else if (b > a && b > c) {
  console.log(`${b} é o maior`);
} else if (c > b && c > a) {
  console.log(`${c} é o maior`);
} else {
  console.log('indeterminado. Um ou mais valores sao iguais');
}
