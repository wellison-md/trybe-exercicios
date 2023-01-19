/* Exercício 11 Bônus
Escreva uma função que substitua a letra ‘x’ em uma frase.

- O nome da função deverá ser substituaX;
- A função deverá receber um nome por parâmetro;
- Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

Exemplo:

Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’
*/

const substituaX = (nome) => {
  const frase = 'Tryber x aqui'.split('');
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'x') {
      frase[index] = nome;
    }
  }
  return frase.join('');
};

console.log(substituaX('Wellison'));
console.log(substituaX('Bebeto'));
