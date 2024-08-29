/*
Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/
const produtos = {
  celular: 4900,
  tablet: 3900,
  notbook: 3500,
  cpu: 3000
};

const prompt = require("prompt-sync")();

const filtrarPropriedade = function (obj, valorMinimo) {   //ele retorna um novo objeto contendo apenas as propriedades cujo valor é numérico e maior que o valor mínimo especificado.
  let novoObjeto = {};

  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] > valorMinimo) {
      novoObjeto[key] = obj[key];
    }
  }
  return novoObjeto;
};

let valor = prompt("Digite o valor mínimo para filtrar as propriedades: ");

let resultado = filtrarPropriedade(produtos, valor);

console.log(resultado);
