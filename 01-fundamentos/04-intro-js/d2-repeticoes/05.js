/**
 *  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

 
 
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const numbers2 = [2, 4, 6];
let totalOddNumbers = 0;

const checkOddNumbers = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
      totalOddNumbers += 1;
    }
  }
  if(totalOddNumbers === 0){
    return 'nenhum valor ímpar encontrado';
  }else{
    return totalOddNumbers;
  }
}
console.log(checkOddNumbers(numbers));
console.log(checkOddNumbers(numbers2));