/* Você está programando um robô que ajude nas tarefas de casa, e seus comportamentos deverão ser escritos em JavaScript.
Crie um algoritmo que receba 5 booleanos:
mom, dad, me, brother, sister.

Eles devem representar se a pessoa pediu para que o robô executasse uma tarefa.
Caso me (você), mom (mãe) ou dad (pai) pedirem, o robô deverá executar sem pensar duas vezes.
Por outro lado, quando seu irmão ou irmã pedirem algo, o robô só deverá executar se ambos pedirem em conjunto.
Seu algoritmo deverá receber os 5 booleanos e mostrar a mensagem:
- "Things I do for love...", caso deva executar a tarefa.
- "Not today.", caso não deva executar. */

let mom, dad, me, brother, sister;
mom = false;
dad = false;
me = true;
brother = true;
sister = true;

if(mom || dad){
  console.log('Things I do for love...')
}else if(brother && sister){
  console.log('Things I do for love...')
}else{
  console.log('Not today.')
}

