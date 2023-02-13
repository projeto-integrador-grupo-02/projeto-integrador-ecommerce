const dataP = '../../databases/products.json';


/* PRODUTOS JSON */
const loadProducts = () => {
    fetch(dataP)
        .then(res => res.json())
        .then(data => {
            tbody.innerHTML = '';
            data.forEach(produto => {
                insertProduto(produto);
            });
        });
};

loadProducts();



function insertProduto(produto, id) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td><%=${produto.image}%></td>
    <td><%=${produto.name}%></td>
    <td><%=${produto.description}%></td>
    <td><%=${produto.price}%></td>
    <td><%=${produto.quantidade}%></td>
    <td>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
    </td>
    `
    tbody.appendChild(tr)
}
