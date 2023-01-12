/* A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
Para isso você precisa criar um programa que recebe um número inteiro e de acordo com este número escolha uma das seguintes opções de lanches:

1 - Trybe Lanche Feliz
2 - McTrybe
3 - TrybeWooper
4 - X-Trybe
5 - Triplo Trybe com JS

Caso a pessoa escolha uma opção diferente, exiba a mensagem: Não temos esta opção ainda :(
Utilize Switch/Case para resolver este problema. */

let menuOptions = Math.floor(Math.random() * 6);

function trybeMenu(option) {
  switch (option) {
    case 1:
      console.log('Trybe Lanche Feliz');
      break;

    case 2:
      console.log('McTrybe');
      break;

    case 3:
      console.log('TrybeWooper');
      break;

    case 4:
      console.log('X-Trybe');
      break;

    case 5:
      console.log('Triplo Trybe com JS');
      break;

    default:
      console.log('Não temos esta opção ainda :(');
  }
}

console.log(trybeMenu(menuOptions));
