# Exercícios 

Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

- [x] Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

``` js
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Modulo (a % b)
```

:dart: **De olho na dica 👀:** Neste link você encontra mais detalhes sobre operadores matemáticos 😉

:dart: **De olho na dica 👀:** Use o console.log() para exibir o que cada o exercício pede.

<br>

- [x] Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

- [x] Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

- [x] Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

- [x] 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
<br>
    :warning: Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

<br>

- [x] Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
<br>
  :dart: Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o código deve retornar uma mensagem de erro. **Exemplo:** bishop (bispo) -> diagonals (diagonais)

<br>

- [x] Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    - Porcentagem >= 90 -> A
    - Porcentagem >= 80 -> B
    - Porcentagem >= 70 -> C
    - Porcentagem >= 60 -> D
    - Porcentagem >= 50 -> E
    - Porcentagem < 50 -> F
  
  <br>

  O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

<br>

- [x] **🚀 Há um par entre nós!** Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.

<br>

- [x] Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.

- [x] Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
  - [x] A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
  - [x] Atente que, sobre o custo do produto, incide um imposto de 20%. seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  - [x] O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

`valorCustoTotal = valorCusto + impostoSobreOCusto;`
`lucro = valorVenda - valorCustoTotal (lucro de um produto);`

- [x] Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:



**INSS (Instituto Nacional do Seguro Social)**

| Salário Bruto | Alíquota |
| :----: | :----: |
| até R$ 1556.94 | 8.00 % |
| R$ 1556.95 a 2594.92 | 9.00 % |
| R$ 2594.93 a 5189.82 | 11.00 % |
| acima de R$ 5189.82 | fixo R$ 570.88 | 


**IR (Imposto de Renda)**

| Salário base | Alíquota | Dedução |
| :---: | :---: | :---: |
| até R$ 1903.98 | isento | isento |
| R$ 1903.99 a 2826.65 | 7.50 % | R$ 142.80 |
| R$ 2826.66 a 3751.05 | 15.00 % | R$ 354.80 |
| R$ 3751.06 a 4664.68 | 22.50 % | R$ 636.13 |
|  > R$ 4664.68 | 27.50 % | R$ 869.36 |


:dart: Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre `R$ 2.594,93 e R$ 5.189,82`, então sua alíquota para INSS é de 11%. O INSS será `11% de R$ 3.000, ou seja, R$ 330,00.`

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: `R$ 3.000,00 - 330,00 = R$ 2.670,00.`

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre `R$ 1.903,99 e 2.826,65`, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

`R$ 2.670,00`: salário com INSS já deduzido;
`7.5%`: alíquota de imposto de renda;
`R$ 142,80` parcela a se deduzir do imposto.
Fazendo a conta, temos: `(7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45`

O último cálculo para conseguir o salário líquido é `R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55`.

Resultado: R$ 2.612,55.

De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?