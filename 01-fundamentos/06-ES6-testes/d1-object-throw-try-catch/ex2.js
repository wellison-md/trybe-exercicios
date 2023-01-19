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
  return `Olá ${order.order.delivery.deliveryPerson}\nEntrega para: ${order.name}\nFone: ${order.phoneNumber}\n${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;

};

console.log(customerInfo(order))

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const flavors = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke);
  const finalCost = Object.values(order.payment);
  return `\nOlá ${order.name}, o total do seu pedido de \n${flavors[0]}, ${flavors[1]} e ${drinks[0]} é R$ ${finalCost}`;
};

// requisito 5.2
Object.assign(order, { name: 'Luiz Silva' });

// requisito 5.3
Object.assign(order, { payment: { total: 50 } });
console.log(orderModifier(order));
