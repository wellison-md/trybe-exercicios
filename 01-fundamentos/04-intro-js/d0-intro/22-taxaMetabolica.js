/* Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.
Crie um algoritmo que receba os dados a seguir e, a partir disso, calcula a BMR da pessoa:

Idade: número maior que 0
Sexo: M ou F
Peso (kg): número maior que 0
Altura (cm): numero maior que 0

* Fórmula para homens: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5.
* Fórmula para mulheres: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161.

O retorno deve ser no seguinte formato:
"A taxa metabólica basal é: 1860 Kcal." */


const pacient1 = {
  age: 31,
  gender: 'male',
  weight: 94,
  height: 1.69,
};

const pacient2 = {
  age: 32,
  gender: 'female',
  weight: 100,
  height: 1.69,
};


const myBmr = (height, weight, age, gender) => {
  let heightInCentimeters = height * 10;

  if (gender == 'male') {
    let menBmr = (heightInCentimeters * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
    console.log(`A taxa metabólica basal é: ${menBmr.toFixed(2)} Kcal`);
  } else if (gender == 'female') {
    let wommenBmr = (heightInCentimeters * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
    console.log(`A taxa metabólica basal é: ${wommenBmr.toFixed(2)} Kcal`);
  } else {
    console.log("opção inválida!\nGenero deve ser 'male' ou 'female'")
  }
}

myBmr(pacient1.height, pacient1.weight, pacient1.age, pacient1.gender);
myBmr(pacient2.height, pacient2.weight, pacient2.age, pacient2.gender);