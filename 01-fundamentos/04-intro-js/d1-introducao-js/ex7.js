/*
Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

const grades = [30, 45, 70, 47, 69, 33, 178, -12, 87.5, 55, 76, 92, 85]

const classifyGrades = (arrGrades) => {
  for (let key in arrGrades) {
    if (arrGrades[key] < 0 || arrGrades[key] > 100) {
      console.log(`Erro! a nota ${arrGrades[key]} é inválida!`);
    } else if (arrGrades[key] >= 90) {
      console.log(arrGrades[key], ' A');
    } else if (arrGrades[key] >= 80 && arrGrades[key] < 90) {
      console.log(arrGrades[key], ' B');
    } else if (arrGrades[key] >= 70 && arrGrades[key] < 80) {
      console.log(arrGrades[key], ' C');
    } else if (arrGrades[key] >= 60 && arrGrades[key] < 70) {
      console.log(arrGrades[key], ' D');
    } else if (arrGrades[key] >= 50 && arrGrades[key] < 60) {
      console.log(arrGrades[key], ' E');
    } else if (arrGrades[key] < 50) {
      console.log(arrGrades[key], ' F');
    }
  }
}

classifyGrades(grades)