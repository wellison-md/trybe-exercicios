/* Exercício 5
Defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: `Tio Patinhas`, `Christmas on Bear Mountain, Dell’s Four Color Comics #178`, `O último MacPatinhas`, `Sim`. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas.
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178.
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas.

Atenção! Ambos recorrentes
*/

const meuObjeto = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

meuObjeto['recorrente'] = 'Sim';

const novoObjeto = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: "Sim",
};

const printTwoObjects = (obj1, obj2) => {
  for (const index in obj1, obj2) {
    if (index === 'recorrente' && obj1['recorrente'] === 'Sim' && obj2['recorrente'] === 'Sim') {
      console.log('Ambos recorrentes');
    } else {
      console.log(`${obj1[index]} e ${obj2[index]}`);
    }
  }
};

printTwoObjects(meuObjeto, novoObjeto);
