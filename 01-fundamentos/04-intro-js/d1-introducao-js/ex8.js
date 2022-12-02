/*
🚀 Há um par entre nós! Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
*/

const a = 33;
const b = 21;
const c = 53;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log('Há um par entre nós!');
  return true;
} else {
  console.log(':( sem pares por aqui...');
  return false;
}