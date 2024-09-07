/*
Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
  {
    produto: "papel",
    quantidade: 45,
    valor: 10,
  },
  {
    produto: "cobertor",
    quantidade: 60,
    valor: 100,
  },
  {
    produto: "meia",
    quantidade: 45,
    valor: 30,
  },
];

const valorVendas = function (vendas) {
  let valorDeCada = 0;
  let SomaValor = 0;
  vendas.forEach((valorTotal) => {
    valorDeCada = valorTotal.valor * valorTotal.quantidade;
    SomaValor += valorDeCada;

    console.log("----------------------");
    console.log(`${valorTotal.produto}`);
    console.log(`${valorTotal.quantidade}`);
    console.log(`${valorTotal.valor}`);
    console.log("----------------------");
  });
  console.log(SomaValor);
};

valorVendas(vendas);

/*450+1350+6000*/
