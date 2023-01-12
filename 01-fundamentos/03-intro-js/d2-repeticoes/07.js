/*
 * Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
 */

const createMyArray = (sizeArray) => {
  let myArray = [];
  for (let x = 0; x < sizeArray; x += 1) {
    myArray.push(Math.floor(Math.random() * 99));
  }
  return myArray;
}

const myArray = createMyArray(25);

for (let index = 0; index < myArray.length; index += 1) {
  console.table(myArray[index]);
}
