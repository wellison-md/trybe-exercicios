/*
Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:



**INSS (Instituto Nacional do Seguro Social)**

| Salário Bruto        | Alíquota       |
| :----:               | :----:         |
| até R$ 1556.94       | 8.00 %         |
| R$ 1556.95 a 2594.92 | 9.00 %         |
| R$ 2594.93 a 5189.82 | 11.00 %        |
| acima de R$ 5189.82  | fixo R$ 570.88 | 


**IR (Imposto de Renda)**

| Salário base         | Alíquota | Dedução   |
| :---:                | :---:    | :---:     |
| até R$ 1903.98       | isento   | isento    |
| R$ 1903.99 a 2826.65 | 7.50 %   | R$ 142.80 |
| R$ 2826.66 a 3751.05 | 15.00 %  | R$ 354.80 |
| R$ 3751.06 a 4664.68 | 22.50 %  | R$ 636.13 |
|  > R$ 4664.68        | 27.50 %  | R$ 869.36 |


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

*/
const minimumWage22 = 1212.00;
let myWage = 1600.00;

const calcINSS = (grossSalary = minimumWage22) => {

}

const calcIR = (salaryAfterInss) => {

}