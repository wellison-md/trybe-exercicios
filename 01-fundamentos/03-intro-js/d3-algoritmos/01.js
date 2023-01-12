/*
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

const factorial = (number) => {
  let factorial = 1;
  if (number === 0) {
    return 1;
  }
  for (let index = number; index >= 1; index -= 1) {
    factorial = factorial * index;
  }
  return factorial;
}

console.log(factorial(10));
