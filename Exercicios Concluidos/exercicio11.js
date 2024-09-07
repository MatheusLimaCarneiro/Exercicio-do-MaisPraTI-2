/*
Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
  {
    cliente: "Pedro",
    produto: "Pizza de Chocolate",
    quantidade: 2,
  },
  {
    cliente: "Velma",
    produto: "Pizza de Peperoni",
    quantidade: 7,
  },
  {
    cliente: "Pedro",
    produto: "Pizza de Frango com Catupiri",
    quantidade: 5,
  },
  {
    cliente: "Velma",
    produto: "Pizza de Calabresa",
    quantidade: 3,
  },
];

const quantidadeTotal = function (pedidos) {
  let agruparQuantidade = {};

  pedidos.forEach((pedido) => {
    if (agruparQuantidade[pedido.cliente]) {
      agruparQuantidade[pedido.cliente] += pedido.quantidade;
    } else {
      agruparQuantidade[pedido.cliente] = pedido.quantidade;
    }
  });
  console.log(agruparQuantidade);
};

quantidadeTotal(pedidos);
