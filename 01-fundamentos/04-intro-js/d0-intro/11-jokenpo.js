/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Exiba o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */

let player1, player2;
let moves = ['rocks', 'paper', 'scisor'];

const randomNumber = () => {
  return Math.floor(Math.random() *3);
}

const initGame = () => {
  let result = '';
  player1 = moves[randomNumber()];
  player2 = moves[randomNumber()];
  
  if(player1 === player2){
    return result ='A Ties';
  }
  if(player1 === 'rocks'){
    if(player2 == ''){}
  }

}

