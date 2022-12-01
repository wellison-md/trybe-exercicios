/* Desenvolva um programa para que a pessoa possa escolher um filme para assistir no Netflix. 
Apresente as opções de filmes e peça para escolher uma opção.
Ex: 
Opção 1: SENHOR DOS ANEIS
Opção 2: VIUVA NEGRA
Opção 3: ESQUADRAO SUICIDA
Opção 4: MATRIX 4 

DICA: Utilize Switch/Case.
*/

let movieOptions = '';

function chooseMovie(movieInput){
  let movie = movieInput.toUpperCase();
  switch(movie){
    case 'SENHOR DOS ANEIS':
      console.log('assistindo Sr dos anéis');
      break;
    
    case 'VIUVA NEGRA':
      console.log('assistindo Viúva negra');
      break;

    case 'ESQUADRAO SUICIDA':
      console.log('assistindo Esquadrão Suicida');
      break;

    case 'MATRIX 4':
      console.log('assistindo Matrix 4');
      break;

    default:
      console.log('opção inválida!')
  }
}

chooseMovie('matrix 4')