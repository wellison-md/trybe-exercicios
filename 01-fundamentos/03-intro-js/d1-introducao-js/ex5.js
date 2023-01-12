/*
 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

 ⚠️Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo. */

const angle1 = 60;
const angle2 = 40;
const angle3 = 60;

const checkTriangle = (angle1, angle2, angle3) => {
  let validAngles = angle1 > 0 && angle2 > 0 && angle3 > 0;

  if (validAngles) {
    if (angle1 + angle2 + angle3 === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Angulo(s) invalido(s)';
  }
}

console.log(checkTriangle(angle1, angle2, angle3));
