/**
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Some todos os valores contidos no array e imprima o resultado;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

const sumArray = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  return sum;
}
console.log(`A soma do array ${numbers}\né: ${sumArray(numbers)}`)