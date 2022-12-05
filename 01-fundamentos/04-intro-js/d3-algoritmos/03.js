/*
Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

const biggerWord = (wordArray) => {

  let longestWord = wordArray[0];
  let shortedWord = wordArray[0];

  for (let index = 0; index < wordArray.length; index += 1) {
    if (wordArray[index].length > longestWord.length) {
      longestWord = wordArray[index];
    }
    if (wordArray[index].length < shortedWord.length) {
      shortedWord = wordArray[index];
    }
  }
  return `The longest word is: ${longestWord}\nThe shorted word is: ${shortedWord}`
}


console.log(biggerWord(array));