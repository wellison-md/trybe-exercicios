/*
 Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
*/

const checkPositive = (param) => {
  if (param > 0) {
    console.log('Positive');
  } else if (param < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
}

checkPositive(-4);
checkPositive(0);
checkPositive(4);