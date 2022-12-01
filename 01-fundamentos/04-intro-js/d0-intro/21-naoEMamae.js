/* Desenvolva um algoritmo que verifica se a mamãe é a Nat. Caso não seja a Nat, exibir 'Não é mamãe!'. */

const checkMommy = (mom) => {
  if (mom.toLowerCase() !== 'nat') {
    console.log('Não é a mamãe!');
  } else {
    console.log('A Nat é a mamãe');
  }
}

checkMommy('Julia');
checkMommy('Nat');
checkMommy('nat');
checkMommy('Julia');