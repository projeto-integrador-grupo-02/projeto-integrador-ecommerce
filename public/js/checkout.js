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