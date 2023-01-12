/*
 Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

const createMyArray = (sizeArray) => {
  let myArray = [];
  for (let x = 0; x < sizeArray; x += 1) {
    myArray.push(Math.floor(Math.random() * 99));
  }
  return myArray;
}

const myArray = createMyArray(25);
const printDividedBy2 = (myArr) => {
  for (let key = 0; key < myArr.length; key += 1) {
    console.log(`posição: ${key}\t vale \t${myArr[key]} e sua metade é: \t${myArr[key] / 2}`);
  }
}

const myNumbersDividedBy2 = printDividedBy2(myArray);
