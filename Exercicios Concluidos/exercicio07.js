/*
Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

const produtos = [
    {
        nome: "Celular",
        preco: 3000,
        desconto: 0.10
    },
    {
        nome: "Notebook",
        preco: 5000,
        desconto: 0.10
    },
    {
        nome: "Mouse",
        preco: 250,
        desconto: 0.10
    }
]

const aplicarDesconto = function(produtos){
    produtos.forEach(produto => {
        const novoPreco = produto.preco - (produto.preco * 0.10)
        console.log("-------------------")
        console.log(`nome: ${produto.nome}`)
        console.log(`Preço original: ${produto.preco}`)
        console.log(`Novo preço: ${novoPreco}`)
        console.log("-------------------")
    })
}


aplicarDesconto(produtos)