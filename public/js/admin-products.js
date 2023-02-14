const form = document.querySelector('form');
let itens = document.querySelectorAll('.page-item');
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sDescricao = document.querySelector('#m-descricao')
const sImage = document.querySelector('#m-image')
const sValor = document.querySelector('#m-valor')
const sQnt = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

console.log("estou aqui")

console.log("sNome: " + sNome)
let produto
let id

form.addEventListener('submit', (event) => {
    console.log("esou aqui 2")
    event.preventDefault();
    // const nome = document.querySelector('#nome').value;
    // const descricao = document.querySelector('#descricao').value;
    // const image = document.querySelector('#image').value;
    // const valor = document.querySelector('#valor').value;
    // const quantidade = document.querySelector('#quantidade').value;

    form.submit();
});

/* Paginação */

for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', (event) => {
        for (let j = 0; j < itens.length; j++) {
            itens[j].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
    });
}


/* MODAL */
