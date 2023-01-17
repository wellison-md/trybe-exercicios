# :gear: Exercícios - parte 1

 - [x] **1.** Altere o tipo das variáveis `var` para `let` ou `const` para que respeitem o escopo em que foram declaradas. Modifique a variável para que respeite o escopo onde está sendo declarada.
:warning:  Lembre-se: para que a variável respeite o escopo, ela **não deve ser acessível fora do escopo em que esteja sendo declarada**. Copie o código abaixo e rode-o para verificar sua saída:

```js
function imprimeIdade() {
  for (var idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
  console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade();
```

---

- [x] **2.** Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo `const`; Copie o código abaixo e rode-o para verificar sua saída:

```js
// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa = {
  nome: 'Luna',
  idade: 19
} // Altere essa estrutura para corrigir o erro.
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);
```
---

- [x] **3.** Modifique a variável para que não ocorra `Erro`. Copie o código abaixo e rode-o para verificar sua saída:

```js
const favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);
```
---

- [x] **4.** Modifique as concatenações para `template literals`. Copie o código abaixo:

```js
const firstName = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + firstName + ' ' + lastName + '!');
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
```
---

- [x] **5.** Modifique a estrutura das funções a seguir para que elas sejam `arrow functions`. Transforme a função `numeroAleatorio` em uma `arrow function`. Copie o código abaixo:

```js
function numeroAleatorio() {
  return Math.random()
}
console.log(numeroAleatorio());
```

---

- [x] **6.** Transforme a função `hello` em uma `arrow function`. Copie o código abaixo:

```js
function hello(nome) {
  return `Olá, ${nome}!`
}
let nome = 'Ivan';
console.log(hello(nome));
```

---

- [x] **7.** Altere a expressão `if/else` utilizando `ternary operator`. Copie o código Abaixo:

```js
let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
  console.log(speedCar(speed));
```
---

<br>

# :gear: Exercícios  - parte 2 

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre `let`, `const`, `arrow functions`, `template literals` e `ternary operator`.

- [x] **8.** Crie uma função que ligue e desligue um motor de um carro. Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

  - [x] **8.1.** Crie a função `ligarDesligar` utilizando `arrow functions`. Ela não receberá nenhum parâmetro;

  - [x] **8.2.** Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

  - [x] **8.3.** Imprima no terminal `O motor está ligado` e “O motor está desligado“ (lembre-se de utilizar o `template literals` nesse momento).


:gift: **Bônus (opcional)**: tente fazer o mesmo exercício utilizando `ternary operator`.

---

- [ ] **9.** Crie uma função que calcule a área de um círculo. Na matemática, a fórmula para calcular a área de um círculo é:

> $A$ círculo = $\Pi$ * $raio^2$

Com base nessa informação:

  - [ ] **9.1.** Crie a função `circleArea`, que recebe o valor do raio como parâmetro, utilizando `arrow functions`;

  - [ ] **9.2.** Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

  - [ ] **9.3.** Crie a lógica para retornar a área do círculo;

  - [ ] **9.4.** Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

Exemplo de retorno:

```bash
Parâmetro: 3
Retorno: Essa é a área do círculo: 28.259999999999998
Parâmetro: 5
Retorno: Essa é a área do círculo: 78.5
```

---

- [ ] **10.** Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase. Exemplo:

> longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') 
// retorna 'aconteceu'

:bulb: **De olho na dica 👀:** Nesse exercício, será necessário utilizar os conhecimentos sobre array, método `split` e loop `for/of`.

---

<br>

# :fire: Bônus

 Crie duas funções JavaScript com as seguintes especificações:

:warning: Não se esqueça de usar `template literals`.

- [ ] **Função 1:** Escreva uma função que substitua a letra ‘x’ em uma frase.

    - [ ] O nome da função deverá ser `substituaX`;
    - [ ] A função deverá receber um `nome` por parâmetro;

    - [ ] Declare dentro da função uma variável do tipo `const`, com o nome frase, atribuindo o valor `'Tryber x aqui!'`;

    - [ ] A função deverá retornar uma nova frase em que o `x` da frase `'Tryber x aqui!'` seja substituído pelo nome passado por parâmetro.

**Exemplo:**
>Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’

:eyes: **Spoiler:** O método `split()` pode ser utilizado de diferentes maneiras, como para separar as palavras de um texto.

---

- [ ] **Função 2:** Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

    - [ ] O nome da função deverá ser minhasSkills;
    - [ ] A função deverá receber o retorno da `Função 1 - substituaX` por parâmetro;
    - [ ] Declare dentro da função uma variável com o nome `skills`, do tipo `const`;
    - [ ] A variável `skills` deverá ser um array contendo três strings com tecnologias que você já aprendeu.
    - [ ] Crie uma varável do tipo `let` e concatene o valor retornado da `Função 1 - substituaX` (utilize `template literals`), a frase `'Minhas três principais habilidades são:'` e o valor da variável `skills`.

<br>

**Exemplo de retorno:**

```
Tryber Bebeto aqui!
Minhas três principais habilidades são:
  - JavaScript
  - HTML
  - CSS
```

### :zap: Enjoy! :zap:
