/* Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.

 1. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

 2. Atente que, sobre o custo do produto, incide um imposto de 20%. seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
 
 3. O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto); */

const productCost = 15;
const costSale = 20;

const calcProfits = (productCost, costSale) => {
  if (productCost < 0 || costSale < 0) {
    console.log('Valores inválidos');
  } else {
    let totalCost = productCost * 1.2;
    let netProfit = costSale - totalCost;
    let profitFrom1000Sales = netProfit * 1000;

    console.log(`Custo: R$ ${productCost.toFixed(2)}`);
    console.log(`Custo +20% imposto: R$ ${(productCost * 1.2).toFixed(2)}`);
    console.log(`Preço de venda: R$ ${costSale.toFixed(2)}`);
    console.log(`Lucro da venda de 1000 unid: R$ ${profitFrom1000Sales.toFixed(2)}`);
  }
}

calcProfits(productCost, costSale);
