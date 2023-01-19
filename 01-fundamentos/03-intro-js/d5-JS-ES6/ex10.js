/* Exercício 10
Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase. 

Exemplo:
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
>>> retorna 'aconteceu'
*/

const firstSentence = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = (sentence) => {
  const breakSentence = sentence.split(' ');
  console.table(breakSentence);
  let longest = breakSentence[0];
  for (let index = 0; index < breakSentence.length; index += 1) {
    if (breakSentence[index].length > longest.length) {
      longest = breakSentence[index];
    }
  }
  return longest;
};
console.log(longestWord(firstSentence));