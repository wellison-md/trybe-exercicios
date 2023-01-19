# :gear: Exercícios Parte I - Criando fluxo de exceção

Copie e cole o código abaixo no seu editor de texto:

```html
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }

    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }

  </script>
</body>
</html>
```

:eyes: Tire um tempinho para entender o código acima. A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs;

Ao clicar o botão, a função `sum` é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o `Number()`, pois ele chega à função em forma de `string`. Há também outras formas de se converter uma string em um número, como o `parseInt()` e o `parseFloat()`.

Ao final, a função `sum` imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

- [x] **1.** Crie erros personalizados. Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? Utilize o `throw new Error('')` e o bloco `try/catch`.

:warning: Evite funções que tenham muitas responsabilidades distintas.

:warning: Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.

:warning: Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função `isNan()`.

---

- [x] **2.** Adicione o texto dos erros no parágrafo com id `result`, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

---

- [x] **3.** Utilize o `finally` para apagar os valores dos inputs ao final do bloco `try/catch`.

**De olho na dica 👀 :bulb: :** Cuidado ao utilizar o `isNaN`, pois valores considerados `falsy` são convertidos em `0`, e valores `truthy` convertidos em `1`, podendo assim gerar um falso positivo. Por exemplo, `isNaN(true)` retorna `false`, dado que `true` será convertido para 1, que é um número. 


# :gear: Exercícios parte II - Pedido de clientes

Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:

```js
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
};

orderModifier(order);
```

- [x] **4.** Complete a função `customerInfo()` para que seu retorno seja similar a:
`Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701`.

**De olho na dica 👀:** Note que o parâmetro da função já está sendo passado na chamada da função.

---

- [x] **5.** Complete a função `orderModifier()` para que seu retorno seja similar a:
`Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.`;

- [x] **5.1.** Modifique o nome da pessoa compradora para `Luiz Silva`;
- [x] **5.2.** Modifique o valor total da compra para `R$ 50,00`.

---

# Exercícios  Parte III - Organizando lições

Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

```js
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

- [x] **6.** Crie uma função para adicionar o turno da noite na `lesson2` Essa função deve possuir três parâmetros, sendo eles: o `objeto` a ser modificado, a `chave` que deverá ser adicionada e o `valor` dela.

---

- [ ] **7.** Crie uma função para listar as `keys` de um objeto. Essa função deve receber um objeto como parâmetro.

---

- [ ] **8.** Crie uma função para mostrar o tamanho de um objeto.

---

- [ ] **9.** Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

---

- [ ] **10.** Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do `Object.assign`. Cada :key: chave desse novo objeto será uma aula, sendo essas chaves `lesson1`, `lesson2` e `lesson3`. Ao executar o comando `console.log(allLessons)`, a saída deverá ser a seguinte:

```shell
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },

  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },

  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
```
---

- [ ] **11.** Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

___

- [ ] **12.** Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 

```js
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
```
---

- [ ] **13.** Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o `objeto`, o `nome da chave` e o `valor da chave`. Exemplo:

```js
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```

# :fire: Exercícios Bônus - Organizando lições

- [ ] **14.** Utilizando o objeto `(allLesson)`, crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

---

- [ ] **15.** Utilizando o objeto `(allLesson)`, crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

```js
console.log(createReport(allLessons, 'Maria Clara'));`

/* output:
{
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
}*/
```

### :zap: Enjoy! :smile: