/* Exercício 7
Altere a expressão if/else utilizando ternary operator. Copie o código Abaixo:

let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed));
*/

let speed = 90;
const speedCar = (speed) => {
  const faultMsg = `Você ultrapassou o limite de velocidade`;
  const standardMsg = `Você está na velocidade permitida`;
  return speed >= 120 ? faultMsg : standardMsg;
};
console.log(speedCar(speed));
