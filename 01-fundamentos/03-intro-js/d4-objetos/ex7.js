/* Exercício 7
Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
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
// console.log(`O livro favorito de ${nomeCompleto} se chama '${livro}'`);

const novoLivro = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

leitor.livrosFavoritos.push(novoLivro);
console.log(`${leitor.nome} tem  ${leitor.livrosFavoritos.length} livros favoritos`);
