/**
 
Com base no código que acabou de gerar(ex 02.js), faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = 0;

const averageArray = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    average += numbers[index];
  }
  let averageArray = average / numbers.length;
  return (averageArray > 20)? 'Valor maior que 20' : 'Valor menor ou igual a 20';
}
console.log(averageArray(numbers))