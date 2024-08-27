/*
Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

const carro = {
    marca: "Chevrolet Onix,",
    modelo: "Ltz",
    ano: 2022,
    cor: "Branco"
}

const exibirConsole = function (obj) {
    for( let key in obj){
        console.log(`${key} : ${obj[key]}`)
    }
}

exibirConsole(carro)