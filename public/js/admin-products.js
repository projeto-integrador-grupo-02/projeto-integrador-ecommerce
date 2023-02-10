const data = require('databases/products.json')

let itens = document.querySelectorAll('.page-item');
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sDescricao = document.querySelector('#m-descricao')
const sImage = document.querySelector('#m-image')
const sValor = document.querySelector('#m-valor')
const sQnt = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

/* Paginação */

for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', (event) => {
        for (let j = 0; j < itens.length; j++) {
            itens[j].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
    });
}

/* PRODUTOS JSON */

console.log(data)