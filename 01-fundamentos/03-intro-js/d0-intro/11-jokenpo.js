/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Exiba o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */

let player1, player2;
let moves = ['rocks', 'paper', 'scisor'];

const randomNumber = () => {
  return Math.floor(Math.random() * 3);
}

const initGame = () => {
  player1 = moves[randomNumber()];
  player2 = moves[randomNumber()];

  if (player1 === player2) {
    return 'A Ties';
  }
  if (player1 === 'rocks') {
    if (player2 === 'scisor') {
      return 'Player 1 won';
    } else {
      return 'Player 2 won';
    }
  }

  if (player1 === 'paper') {
    if (player2 === 'rocks') {
      return 'Player 1 won';
    } else {
      return 'Player 2 won';
    }
  }
  if (player1 === 'scisor') {
    if (player2 === 'paper') {
      return 'Player 1 won';
    } else {
      return 'Player 2 won';
    }
  }
}

const printResultGame = (result) => {
  console.clear();
  console.log(`+------------------+`);
  console.log(`|       joKenPo    |`);
  console.log(`+------------------+`);
  console.log(`you: ${player1}\t\tplayer2: ${player2}`);
  console.log(`>>> ${result}`);
}

printResultGame(initGame());
