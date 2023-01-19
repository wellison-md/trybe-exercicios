/* Exercício 12 Bônus
Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

- O nome da função deverá ser minhasSkills;
- A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
- Declare dentro da função uma variável com o nome skills, do tipo const;
- A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

Exemplo de retorno:

Tryber Bebeto aqui!
Minhas três principais habilidades são:
  - JavaScript
  - HTML
  - CSS
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

const minhasSkills = (tryber) => {
  tryber = substituaX(tryber);
  const skills = ['Javascript ES6', 'HTML5', 'CSS3'];
  let listSkills = '';
  for (let index = 0; index < skills.length; index += 1) {
    listSkills += `- ${skills[index]}\n`;
  }
  return `${tryber}\nMinhas três principais habilidades são:\n${listSkills}`;
};

console.log(minhasSkills('Wellison'));
console.log(minhasSkills('Bebeto'));
