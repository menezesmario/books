const books = require('./database')
console.log(books)

// pegar input

// Se sim, mostra categorias disponíveis e pergunta qual categoria desejada

// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas


const readline = require('readline-sync')

const startInput = readline.question('Deseja buscar um livro? S/N')

if (startInput.toLocaleUpperCase() == 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', 'História', 'Américas', 'Tecnologia', 'Estilo de Vida')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')

    const inputReturn = books.filter(book => book.category === entradaCategoria)

    console.table(inputReturn)
} else {
    const allBooksOrdereds = books.sort((a,b) => a.pages - b.pages)
    console.log('Esses são todos os livros disponíveis:')
    console.table(allBooksOrdereds);
}






