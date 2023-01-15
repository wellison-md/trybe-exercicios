/* Exercício 3
Faça um `for/in` que mostre todas as chaves do objeto. Valor esperado no console:

personagem
origem
nota
recorrente
*/

const meuObjeto = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

meuObjeto['recorrente'] = 'Sim';

for (const index in meuObjeto) {
  console.log(index);    
}
