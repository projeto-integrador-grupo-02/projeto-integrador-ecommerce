let numeroInput = document.getElementById('numcc');
    numeroInput.addEventListener('change', ()=>{
        if(numeroInput.value.length < 16){
            numeroInput.style.borderColor = 'red'
       } else{
           numeroInput.style.borderColor = 'white'
       }
    })

    let cvvInput = document.getElementById('cvv')
    cvvInput.addEventListener('change', ()=>{
        if(cvvInput.value.length == 3){
            cvvInput.style.borderColor = 'white'
       } else{
           cvvInput.style.borderColor = 'red'
       }
    })
    

    const cep = document.getElementById('cep')

    const showData = result => {
        for(const campo in result) {
            if(document.querySelector('#' + campo)) {
                document.querySelector('#'+campo).value = result[campo]
            }
        }
    }
    cep.addEventListener('blur', e=> {
        let search = cep.value.replace("-","")
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
    
        fetch(`https://viacep.com.br/ws/${search}/json/`)
            .then(res => res.json())
                .then(res => {
                    return showData(res)
                })
    })

    