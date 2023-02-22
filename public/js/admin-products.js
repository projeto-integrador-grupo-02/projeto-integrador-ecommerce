let itens = document.querySelectorAll('.page-item');
let clienteId = document.querySelector('#clienteId')

/* Paginação */

for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', (event) => {
        for (let j = 0; j < itens.length; j++) {
            itens[j].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
    });
}

function search() {
    // Recupera o valor digitado no campo de busca
    const input = document.querySelector('.busca');
    const filter = input.value.toUpperCase();
    
    // Recupera a tabela e suas linhas
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    
    // Percorre as linhas da tabela filtrando os dados
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll('td');
      let found = false;
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
      if (found) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }

