/* Exercício 9
Crie uma função que calcule a área de um círculo. Na matemática, a fórmula para calcular a área de um círculo é:

Área_círculo = Pi x raio^2
 
Com base nessa informação:
9.1. Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

9.2. Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

9.3. Crie a lógica para retornar a área do círculo;

9.4. Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento)
 */

const PI = Math.PI;
const circleArea = (radius) => {
  const area = PI * radius ** 2;
  return `Essa é a área do círculo: ${area.toFixed(4)}`;
};

console.log(circleArea(3));
console.log(circleArea(5));
