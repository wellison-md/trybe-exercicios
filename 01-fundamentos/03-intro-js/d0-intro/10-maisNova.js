/* Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime quem é a mais nova. Exiba no seguinte formato:
"Pessoa" é a mais nova. */

let ageMarina = 20;
let ageSilvia = 35;
let ageIza = 44;

let person;

if (ageMarina < ageSilvia && ageMarina < ageIza) {
    person = "Marina";
} else if (ageSilvia < ageMarina && ageSilvia < ageIza) {
    person = "Silvia";
} else {
    person = "Iza";
}

console.log(`${person} é a mais nova`);
