/* Um grande banco lhe contratou para fazer um programa para gerenciar um caixa eletrônico. As máquinas deste banco só possuem notas de R$10, R$50 e R$100.
Para fazer este programa funcionar você deve coletar o saldo da pessoa e qual o valor do saque que ela quer fazer.
Se o valor passado no saque for zero exiba a mensagem: "Valor de saque inválido".
Se o saque for maior que o saldo, exiba a mensagem: "Saldo insuficiente".
É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico. Caso o valor não se encaixe nas possibilidades, exiba a mensagem: "Valor inválido para as notas disponíveis: R$10, R$50, R$100".
Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e exiba a mensagem: "Saque efetuado! Novo saldo: R$30". */

let myBalance = 150;

function withdraw(amount, userBalance) {
  if (amount <= 0) {
    return 'Valor de saque inválido';
  }

  if (amount > userBalance) {
    return 'Saldo insuficiente';
  } else if (amount >= 10 && (amount % 10 == 0 && amount % 50 == 0 && amount % 100 == 0)) {
    return 'Valor inválido para as notas disponíveis: R$10, R$50, R$100'
  } else {
    userBalance -= amount;
    return `Saque efetuado! Novo saldo: R$ ${userBalance.toFixed(2)}`;
  }
}

console.log(withdraw(0, myBalance));
console.log(withdraw(200, myBalance));
console.log(withdraw(80, myBalance));
console.log(withdraw(20, myBalance));
console.log(withdraw(5, myBalance));
