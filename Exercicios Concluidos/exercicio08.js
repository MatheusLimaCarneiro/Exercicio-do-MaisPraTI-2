/*
Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

const filmes = [
    {
        titulo: "Homem-Aranha",
        diretor: "Jeremias",
        anoDeLançamento: 2002
    },
    {
        titulo: "Deadpool & Wolwerine",
        diretor: "Josias",
        anoDeLançamento: 2024
    },
    {
        titulo: "Sonic 3",
        diretor: "Jacariass",
        anoDeLançamento: 2024
    },
]

const apenasTitulos = function(filmes){
    let filmesTitulosArray = []
    filmes.forEach(titulosFilmes => {
        filmesTitulosArray.push(titulosFilmes.titulo)
    }
    )
    console.log(filmesTitulosArray)
}

apenasTitulos(filmes)