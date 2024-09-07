/*
Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

const funcionarios = [
  {
    nome: "Fabricio",
    cargo: "Atendente",
    salario: 1200,
  },
  {
    nome: "Brayan",
    cargo: "Atendente",
    salario: 1000,
  },
  {
    nome: "Joelson",
    cargo: "Atendente",
    salario: 3200,
  },
];

const saberFuncionarioPeloSalario = function (
  funcionarios,
  salarioFuncionario
) {
  for (let funcionario of funcionarios) {
    if (funcionario.salario >= salarioFuncionario) {
      console.log("------------------------");
      console.log(`Funcionario: ${funcionario.nome}`);
      console.log(`Cargo: ${funcionario.cargo}`);
      console.log(`Salario: ${funcionario.salario}`);
      console.log("------------------------");
    }
  }
};

const prompt = require("prompt-sync")();

let valorEspecifico = Number(prompt("Digite o salario: "));

saberFuncionarioPeloSalario(funcionarios, valorEspecifico);
