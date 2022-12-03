/**
 *  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    totalOddNumbers += 1;
  }
}
console.log(totalOddNumbers);