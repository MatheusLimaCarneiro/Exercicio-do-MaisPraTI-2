/*
Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

const alunos = [
    { 
        nome: "Lucas",
        nota1: 7.0,
        nota2: 8.0
    },
    {
        nome: "João",
        nota1: 8.0,
        nota2: 5.5
    },
    {
        nome:"Sergio",
        nota1:6.0,
        nota2:7.0
    }
    
]

const detalhesDosAlunos = function(obj){
    let media =0
    for(let alunos of obj){
        media = ((alunos.nota1 + alunos.nota2)/ 2)
        console.log(`Aluno ${alunos.nome}: nota 1: ${alunos.nota1} nota 2: ${alunos.nota2}  média: ${media}`)
    }
}

detalhesDosAlunos(alunos)