/*
Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

const pessoas = [
  {
    nome: "Alex",
    idade: 23,
    cidade: "Porto Alegre",
  },
  {
    nome: "Gilmara",
    idade: 34,
    cidade: "Rio de Janeiro",
  },
  {
    nome: "Giovanna",
    idade: 20,
    cidade: "Bahia",
  },
];

const exibirConsole = function (obj) {
  for (let key of obj) {
    console.log("----------------");
    console.log(`Nome: ${key.nome}`);
    console.log(`Idade: ${key.idade}`);
    console.log(`Cidade: ${key.cidade}`);
    console.log("----------------");
  }
};

exibirConsole(pessoas);
