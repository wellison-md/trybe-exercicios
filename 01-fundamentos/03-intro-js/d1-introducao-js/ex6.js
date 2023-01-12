/*
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
*/

let pieces = ['king', 'queen', 'bishop', 'knight', 'pawn', 'rook'];

const chessPieceMoviment = (piece) => {
  switch (piece.toLowerCase()) {
    case 'king':
      console.log('Rei: horizontal, vertical e diagonal, 1 casa por vez');
      break;

    case 'queen':
      console.log('Rainha: horizontal, vertical e diagonal, quantas casas desejar');
      break;

    case 'bishop':
      console.log('Bispo: diagonais, quantas casas desejar');
      break;

    case 'knight':
      console.log('Cavalo: 2 casas na horizontal ou vertical e 1 casa em paralelo');
      break;

    case 'rook':
      console.log('Torre: horizontal, vertical, quantas casas desejar');
      break;

    case 'pawn':
      console.log('Peão: vertical, 2 casas na primeira jogada, em seguida somente 1 casa por vez');
      break;

    default:
      console.log('peça inválida');
  }
}

chessPieceMoviment(pieces[Math.floor(Math.random() * 6)]);
