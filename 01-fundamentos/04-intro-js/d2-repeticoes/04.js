/**
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const biggerValue = (numbers) => {
  let bigger = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > bigger){
      bigger = numbers[index];
    }
  }
  return bigger;
}
console.log(` O maior valor no array é: ${biggerValue(numbers)}`)