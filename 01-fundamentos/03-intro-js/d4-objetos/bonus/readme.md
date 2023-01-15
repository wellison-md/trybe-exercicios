 # :gear: :fire: Exercícios - bônus :fire:

Os exercícios a seguir são mais desafiadores do que os anteriores, e te permitem utilizar vários conceitos adquiridos até o momento no curso para construir um código melhor estruturado como solução. Aproveite para treinar suas habilidades e testar coisas novas!

- [ ] **1.** (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

:warning: **Atenção!** Esse exercício já apareceu no processo seletivo de uma grande multinacional!

:bulb: :bulb: **Dicas:** Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

| I   | 1    |
| :---: | ----: |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

:warning: **Atenção!** Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. 

>Exemplo: XI = 10 + 1 = 11. 

No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. 

>Exemplo: IX = 10 - 1 = 9.

<br>
<hr>

- [ ] **2.** Crie uma função chamada `arrayOfNumbers` que receberá a variável `vector` como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

```js
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```
<br>
<hr>

- [ ] **3.** A partir do array de frutas `basket`, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array 
`[‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’]`, 
deverá retornar 
`{ Melancia: 3, Abacate: 1, Uva: 1 }` 
quando passado como argumento para a função.
    - [ ] **3.1.** Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: `Sua cesta possui: x Melancias, x Abacates...`

```js
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
```
<hr>

- [ ] **4.** Usando o objeto abaixo, faça o que for pedido a seguir:

```js
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
```

- [ ] **4.1.** Acesse as chaves `nome`, `sobrenome`, `andar` e `apartamento` do último morador do `blocoDois` e faça um console.log no seguinte formato: 
`“O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”`.


- [ ] **4.2.** Utilize o `for` para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves :key: `nome` e `sobrenome`. Depois faça o mesmo para os moradores do bloco 2.





