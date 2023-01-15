/* Exercício 4
Faça um novo `for/in`, mas agora mostre todos os valores das chaves :key: do objeto. Valor esperado no console: 

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/

const meuObjeto = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

meuObjeto['recorrente'] = 'Sim';

for (const index in meuObjeto) {
  console.log(meuObjeto[index]);    
}
