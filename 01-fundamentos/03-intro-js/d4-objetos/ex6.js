/* Exercício 6
Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um console.log no seguinte formato: `“O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”`.
*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

const nomeCompleto = `${leitor.nome} ${leitor.sobrenome}`;
const livro = leitor.livrosFavoritos[0].titulo;
console.log(`O livro favorito de ${nomeCompleto} se chama '${livro}'`);
