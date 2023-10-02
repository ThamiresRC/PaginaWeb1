let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let contato = document.querySelector("#contato")
let nomeOk = false
let emailOk = false
let contatoOk = false

nome.style.width = '50%'
email.style.width = '50%'
contato.style.width = '50%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    }else {
        txtNome.innerHTML= "Nome Valido"
        txtNome.style.color = "green"
        nomeOk = true

    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML= "E-mail Valido"
        txtEmail.style.color = "green" 
        emailOk = true

    }

}

function validaContato(){
    let txtContato = document.querySelector("#txtContato")
    if (assunto.value.length < 3){
        txtContato.innerHTML = "Contato Invalido"
        txtContato.style.color = "red"
    }else {
        txtContato.innerHTML = "Contato Valido"
        txtContato.style.color = "green"
        contatoOk = true

    }
}

function enviar(){
    if (nomeOk == true && email == true && contato == true){
        alert ("Formulario enviado com sucesso!")
    }else {
        alert ( "Preencha o formulario corretamente antes de enviar!")
    }
}