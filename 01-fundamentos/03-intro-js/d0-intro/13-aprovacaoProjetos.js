/* Aqui na Trybe você precisa entregar os projetos dentro de algumas regras para obter aprovação. Desenvolva um programa que faça essa verificação seguindo as seguintes regras:
- Se a pessoa não estiver em período de recuperação, é preciso entregar 80% ou mais dos requisitos obrigatórios para obter aprovação;
- Se a pessoa estiver em período de recuperação, é preciso entregar 90% dos requisitos totais (obrigatórios + bônus) para obter aprovação;

Caso a pessoa tenha conseguido entregar o projeto exiba a mensagem: Parabéns, você está aprovado(a)!
Caso a pessoa não tenha conseguido entregar o projeto exiba a mensagem: Você ainda precisa entregar mais requisitos ;) */

let inRecovery = true;
let finishedProjects = 60;

if (inRecovery === false && finishedProjects >= 80) {
  console.log('Parabéns, você está aprovado(a)!');
} else if (inRecovery === true && finishedProjects >= 90) {
  console.log('Parabéns, você está aprovado(a)!');
} else {
  console.log('Você ainda precisa entregar mais requisitos ;)')
}
