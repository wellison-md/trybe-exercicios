// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const a = 34;
const b = 37;
const c = 22;

const checkIsOdd = (a, b, c) => {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkIsOdd(a, b, c))