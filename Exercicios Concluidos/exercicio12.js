/*
Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

const estoque = [
  {
    produto: "Luva",
    quantidade: 2,
    minimo: 8,
  },
  {
    produto: "Meia",
    quantidade: 5,
    minimo: 2,
  },
  {
    produto: "Calça",
    quantidade: 4,
    minimo: 10,
  },
];

const duplicarQuantidades = function (estoque) {
  estoque.forEach((produto) => {
    if (produto.quantidade < produto.minimo) {
      produto.quantidade *= 2;
    }
    console.log("----------------------");
    console.log(`Produto: ${produto.produto}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log(`Mínimo: ${produto.minimo}`);
    console.log("----------------------");
  });
};

duplicarQuantidades(estoque);
