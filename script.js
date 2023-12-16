let tabela = document.getElementById("tabela")

console.log(tabela)

const listaDeBilas = [
    {
        id: "01",
	    nome: "Bila 1",
        descricao: "Da boa mesmo",
        preco: "R$ 10,00"
    },

    {
        id: "02",
	    nome: "Bila 2",
        descricao: "Bila show",
        preco: "R$ 100,00"
    },

    {
        id: "03",
	    nome: "Bila 3",
        descricao: "Bila beleza",
        preco: "R$ 5,00"
    },

    {
        id: "04",
	    nome: "Bila 4",
        descricao: "Bila firmeza",
        preco: "R$ 4,00"
    },

    {
        id: "05",
	    nome: "Bila 5",
        descricao: "Bilaaaaaaaa",
        preco: "R$ 3,00"
    },

    {
        id: "06",
	    nome: "Bila 6",
        descricao: "Bilona",
        preco: "R$ 2,00"
    },

    {
        id: "07",
	    nome: "Bila 7",
        descricao: "Bilita",
        preco: "R$ 1,00"
    },

    {
        id: "08",
	    nome: "Bila 8",
        descricao: "Que shoowwwwww",
        preco: "R$ 55,00"
    },

    {
        id: "09",
	    nome: "Bila 9",
        descricao: "Eita que bila",
        preco: "R$ 44,00"
    }
]

listaDeBilas.forEach(produto => {
    let linha = `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>${produto.preco}</td>
            <td><button><i class="fa-solid fa-pen-to-square" style="color: #000000;"></i></button></td>
            <td><button><i class="fa-solid fa-trash" style="color: #000000;"></i></button></td>
        </tr>`
    tabela.innerHTML += linha
}) 
