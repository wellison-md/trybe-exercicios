/* Exercício 8
8. Crie uma função que ligue e desligue um motor de um carro. Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

8.1. Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

8.2. Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

8.3. Imprima no terminal O motor está ligado e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
*/

let engineIsWorking = false;

const checkEngineStatus = () => {
  engineOn = 'O motor está ligado';
  engineOff = 'O motor está desligado';
  console.log(engineIsWorking === true ? engineOn : engineOff);
};

checkEngineStatus();
engineIsWorking = true;
checkEngineStatus();
