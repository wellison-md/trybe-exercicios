/* Você está planejando uma viagem até a praia com colegas.
Uma das tarefas para a viagem acontecer é calcular quantos dias ela irá levar.
Você está em São Paulo, o João está em Belo Horizonte e a Joana está em Salvador.
Levando em conta que o destino do grupo é Natal, no Rio Grande do Norte, crie um algoritmo que calcula a duração de dias de uma viagem levando em conta a quantidade total de horas.
O total de dias deve ter precisão de 3 dígitos.

Informações: 
São Paulo até Belo Horizonte = 7 horas e 23 minutos;
Belo Horizonte até Salvador = 19 horas e 57 minutos;
Salvador até Natal = 15 horas e 32 minutos. */

let spBhHoras = 7;
let spBhMinutos = 23;
let bhSalHoras = 19;
let bhSalMinutos = 57;
let salNatHoras = 15;
let salNatMinutos = 32;

let somaMinutos = (spBhMinutos + bhSalMinutos + salNatMinutos)/60;

let somaHoras = spBhHoras + bhSalHoras + salNatHoras + somaMinutos;

let totalDias = somaHoras / 24;

console.log(somaHoras);
console.log(totalDias.toFixed(3));