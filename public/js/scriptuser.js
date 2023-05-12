/*     PICTURE      */

const pictureIn = document.querySelector('#picturein')
const pictureSp = document.querySelector('.picturesp')
const  pictureTxt = 'Escolha uma imagem'

const inputData = document.querySelector('#data')

pictureSp.innerHTML = pictureTxt

// VALIDAÇÃO DATA DE NASCIMENTO

inputData.addEventListener('blur', (event) => {
    validaDataNascimento(event.target)
}
)

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorIdade(dataRecebida)) {
        mensagem = 'Você precisa ser maior de 18 anos para alterar o cadastro'
    }

    inputData.setCustomValidity(mensagem)
}

function maiorIdade(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
