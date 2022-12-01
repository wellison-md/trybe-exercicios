/* Faça um algoritmo que calcule a média das 3 notas de uma pessoa estudante e mostre, além do valor da média, uma mensagem de “Aprovação”, caso a média seja igual ou superior a 6, ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6. Exiba no seguinte formato:
Aprovação, média: 7 ou Reprovação, média: 5. */
let grades =[5, 8, 7,10];

let sum = grades.reduce((initialGrade, total)=>{
    return initialGrade += total;
})

let average = sum / grades.length;
let result  ='';

if( average >= 6 ){
    result = "Aprovação";
}else{
    result = "Reprovação";
}

console.log(`${result}, média: ${average.toFixed(2)}`);