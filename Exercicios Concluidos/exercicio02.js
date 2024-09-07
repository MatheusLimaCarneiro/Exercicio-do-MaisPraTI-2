/*
Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

const livro = {
  titulo: "O Senhor dos Anéis: A Sociedade do Anel",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "fantasia",
};

const verificarObjeto = function (obj) {
  if ("editora" in obj) {
    console.log("A propriedade edito existe");
  } else {
    livro.editora = "HarperCollins Brasil";
  }
};
const exibirConsole = function (obj) {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
};

exibirConsole(livro);
verificarObjeto(livro);
exibirConsole(livro);
