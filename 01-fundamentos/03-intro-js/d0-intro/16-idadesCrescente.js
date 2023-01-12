//Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime as idades em ordem crescente.

function crescentAges(marinaAge, silviaAge, izaAge) {
  let ages = [];
  ages.push(marinaAge, silviaAge, izaAge);

  ages.sort((a, b) => { return a - b })
  return ages;
}

console.log(crescentAges(22, 18, 40));
