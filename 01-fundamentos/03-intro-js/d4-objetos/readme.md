# 🚀 :gear: Exercícios - objetos e for/in

Usando o objeto abaixo, faça os exercícios a seguir:

```js
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

- [x] **1.** Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe `meuObjeto.chave`. Valor esperado no console:

>Bem-vinda, Margarida

- [x] **2.** Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe `meuObjeto['chave'] = valor`. Valor esperado no console:

```js
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```
- [x] **3.** Faça um `for/in` que mostre todas as chaves do objeto. Valor esperado no console:

```shell
personagem
origem
nota
recorrente
```

- [x] **4.** Faça um novo `for/in`, mas agora mostre todos os valores das chaves :key: do objeto. Valor esperado no console: 

```shell
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

- [x] **5.** Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: `Tio Patinhas`, `Christmas on Bear Mountain, Dell’s Four Color Comics #178`, `O último MacPatinhas`, `Sim`. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

```shell
Margarida e Tio Patinhas.
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178.
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas.
Ambos recorrentes
```

:warning: **Ambos recorrentes // Atenção para essa última linha!**

## 🚀 Leitura de Objetos

Usando o objeto abaixo, faça os exercícios a seguir:

```js
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
```

- [ ] **6.** Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um console.log no seguinte formato: `“O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”`.

- [ ] **7.** Adicione um novo livro favorito na chave `livrosFavoritos`, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

```js
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: `“Julia tem <quantidade> livros favoritos”`, onde `<quantidade>` é um número gerado automaticamente pelo seu código.

