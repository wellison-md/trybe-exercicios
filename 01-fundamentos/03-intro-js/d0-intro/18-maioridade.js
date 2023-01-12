/* Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade". */

function checkAge(age) {
  let personAge = Math.floor(age);
  if (personAge >= 18) {
    console.log('A pessoa é maior de idade');
  } else {
    console.log('A pessoa é menor de idade');
  }
}

checkAge(15);
checkAge(18);
checkAge(35);
checkAge(-12);
checkAge(-23);
checkAge(13.5);
