/* André resolveu criar seu próprio programa de cálculo de Índice de Massa Corporal (IMC).
Tendo em vista que:
- A fórmula para calcular o IMC é divisão do peso (em kg) pela altura ao quadrado (em metros);
- André pesa 75 kg e sua altura é 1,80 m;
Qual deverá ser o algoritmo usado por André para calcular seu próprio IMC? */

let andreWeight = 75;
let andreHeight = 1.8;

let imc = (andreWeight)/andreHeight**2;

console.log(imc.toFixed(2));