/*
Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

const itens = [
  {
    nome: "Camisa",
    quantidade: 3,
    precUnitario: 20,
  },
  {
    nome: "Calça",
    quantidade: 4,
    precUnitario: 28,
  },
  {
    nome: "Moletom",
    quantidade: 5,
    precUnitario: 33,
  },
];

const calcularCarrinho = function (itens) {
  let valorTotalCarrinho = 0;
  itens.forEach((valorCarrinho) => {
    let valorProduto = valorCarrinho.quantidade * valorCarrinho.precUnitario;
    valorTotalCarrinho += valorProduto;

    console.log("--------------------");
    console.log(`Itens`);
    console.log(`Nome: ${valorCarrinho.nome}`);
    console.log(`Quantidade: ${valorCarrinho.quantidade}`);
    console.log(`Preço Unitario: ${valorCarrinho.precUnitario}`);
    console.log("--------------------");
  });
  console.log(`Valor Total: ${valorTotalCarrinho}`);
};

calcularCarrinho(itens);
