/* Fernando tem um dinossauro muito esperto. Quando está com as duas pernas no chão, o dinossauro fala em português. Quando levanta a perna esquerda, fala em inglês. Por fim, quando levanta a perna direita fala em francês. 
Jackson, amigo de Fernando, ficou fascinado com o animal. Em sua emoção perguntou: “E quando ele levanta as duas?”. Antes que Fernando pudesse responder, o dinossauro gritou: “Ai eu caio, né tio Jack!!”.
Desenvolva um algoritmo que contém a situação de levantamento das pernas do dinossauro, e retorna o idioma em que ele irá falar.
Exemplo de entrada | Exemplo de saída
esquerda           | english
direita            | français
nenhuma            | português
as duas            | Ai eu caio, né!!
*/

let legsUp = ['esquerda', 'direita', 'nenhuma', 'as duas'];

function dino (howLegIsUp){
  if(howLegIsUp === 'esquerda'){
    return 'english';
  } else if (howLegIsUp === 'direita'){
    return 'français';
  } else if (howLegIsUp === 'nenhuma'){
    return 'português';
  } else if (howLegIsUp === 'as duas'){
    return 'Aí eu caio, né!!';
  }
}

console.log(dino('esquerda'));
console.log(dino('direita'));
console.log(dino('nenhuma'));
console.log(dino('as duas'));