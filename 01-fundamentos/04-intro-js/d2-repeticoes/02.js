/**
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Calcule e imprima a média aritmética dos valores contidos no array;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = 0;

const averageArray = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    average += numbers[index];
  }
  return average / numbers.length;
}
console.log(`A média do array ${numbers}\né: ${averageArray(numbers)}`)