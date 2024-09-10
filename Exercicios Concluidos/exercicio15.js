/*
Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

const transacoes = [
    {
        entrada: 14,
        saida: 45
    },
    {
        entrada: 178,
        saida: 23
    },
    {
        entrada: 67,
        saida: 43
    },
]

const calcularSaldo = function(tran){
    let somaValorEntrada = 0
    let somaValorSaida = 0
    let finalSaldo

    tran.forEach((transacoes) => {
        somaValorEntrada += transacoes.entrada
        somaValorSaida += transacoes.saida
    })
    finalSaldo = somaValorEntrada - somaValorSaida

    console.log(`Saldo Final: ${finalSaldo}`)
}

calcularSaldo(transacoes)