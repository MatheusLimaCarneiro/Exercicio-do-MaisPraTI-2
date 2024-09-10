/*
Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

const empresa = {
  departamentos: [
    {
      nome: "TI",
      funcionarios: [
        {
          nome: "Daisy Grant",
        },
      ],
    },
    {
      nome: "Admnistração",
      funcionarios: [
        {
          nome: "Danny Morgan",
        },
      ],
    },
    {
      nome: "Limpeza",
      funcionarios: [
        {
          nome: "Hilda McKenzie",
        },
      ],
    },
  ],
};

const funcionarioDepartamento = function (emp) {
  for (const departamento in emp.departamentos) {
    console.log("-----------------------------");
    console.log(`Departamento: ${emp.departamentos[departamento].nome}`);
    for (const funcionario of emp.departamentos[departamento].funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}`);
    }
  }
};

funcionarioDepartamento(empresa);
