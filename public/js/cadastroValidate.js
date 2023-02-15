
// const vcadastro = document.getElementById("cadastro");

// vcadastro.addEventListener('submit',()=>{
    
//     verifyCadastro();
    
// })
// function verifyCadastro(){
    
//     const emailInput = document.getElementById('email').value;
//     // const passwordInput = document.getElementById('password').value;
//     const cpfInput = document.getElementById('cpf').value;
//     const nomeInput = document.getElementById('nome').value;
//     if(!nomeInput || nomeInput.length <4){
//         alert("nome completo");
//     }
//     if(!emailInput){
//         //email : deve ter um @, dominio,

//         alert("necessita escrever um email valido");
//     }else {
//         validEmail(emailInput);
//     }
//     // if(!passwordInput || passwordInput.length < 5){
//     //     alert("necessita por senha ou ser maior que 5 digitos");
//     // }
//     validCpf(cpfInput);
// }
// function validEmail(emailInput){
    
//     const atPosition = emailInput.search("@");
//     if(atPosition != -1 && atPosition < emailInput.length-1){

//         console.log("email com @");
//         return true;
        
//     }else{
//         alert("email inválido")
//         return false;
//     }
    
// }
// function validCpf(cpfInput){
    
//     if(cpfInput.length != 11){
//         alert("cpf invalido");
//         return false;
//     }else{
//         return true;
//     }
// }