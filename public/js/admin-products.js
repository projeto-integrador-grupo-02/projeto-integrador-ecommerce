const form = document.querySelector('form');
let itens = document.querySelectorAll('.page-item');
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#name')
const sDescricao = document.querySelector('#description')
const sImage = document.querySelector('#image')
const sValor = document.querySelector('#price')
const sQnt = document.querySelector('#quantity')
const btnSalvar = document.querySelector('#btnSalvar')

console.log("estou aqui")

console.log("sNome: " + sNome)
let produto
let id

form.addEventListener('submit', (event) => {})
    

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
