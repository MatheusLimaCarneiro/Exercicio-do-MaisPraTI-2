/*
Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

const clientes = [
  {
    nome: "Marlene",
    idade: 67,
    cidade: "Porto Alegre",
  },
  {
    nome: "Eliana",
    idade: 29,
    cidade: "Porto Alegre",
  },
  {
    nome: "Giovanna",
    idade: 20,
    cidade: "Porto Alegre",
  },
  {
    nome: "Alex",
    idade: 50,
    cidade: "Porto Alegre",
  },
];

const maisDeTrinta = function (cliente) {
  let quantidadeDeCliente = 0;
  cliente.forEach((clienteMais30) => {
    if (clienteMais30.idade > 30) {
      quantidadeDeCliente++;
    }
  });
  console.log(`Têm ${quantidadeDeCliente} com mais de 30 anos`);
};

maisDeTrinta(clientes);
