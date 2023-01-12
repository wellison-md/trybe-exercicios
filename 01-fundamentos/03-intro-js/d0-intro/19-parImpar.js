/* Crie um algoritmo que descubra se um número é por ou ímpar.
Exiba o resultado no seguinte formato: "O número X é par." */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function parAndOddNumbers(numberList) {
  for (let key in numberList) {
    if (numberList[key] % 2 === 0) {
      console.log(`O número ${numberList[key]} é par.`);
    } else {
      console.log(`O número ${numberList[key]} é ímpar.`);
    }
  }
}

parAndOddNumbers(numbers);
