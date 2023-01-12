/*
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Modulo (a % b)

*/

const sum = (a, b) => { console.log(a + b) };
sum(2, 2);

const subtract = (a, b) => { console.log(a - b) };
subtract(4, 2);

const multiply = (a, b) => { console.log(a * b) };
multiply(4, 5);

const division = (a, b) => {
  b > 0 ? console.log(a / b) : console.log('Erro! Divisão por zero!');
};
division(3, 0);
division(9, 3);

const modules = (a, b) => { console.log(a % b) };
modules(10, 5);
modules(10, 3);
