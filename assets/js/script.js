/*
Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByTagName
por class: getElementByClassName()
por Seletor querySelector()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome=document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'darkred'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color= 'green'
        nomeOk=true
    }
}
    function validaEmail(){
        let txtEmail=document.querySelector('#txtEmail')

       if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
           txtEmail.innerHTML = 'E-mail Inválido'
           txtEmail.style.color='darkred'
       }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color='green'
        emailOk=true
       }
    }

    function validaAssunto(){
        let txtAssunto=document.querySelector('#txtAssunto')
        if (assunto.value.length >= 100){
            txtAssunto.innerHTML= "Texto muito grande, digite no máximo 100 caracteres"
            txtAssunto.style.color= "darkred"
            txtAssunto.style.display = 'block'
        }else{
            txtAssunto.style.display = 'none'
            assuntoOk=true
        }
    }

    function enviar(){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
            alert ('Formulário enviado com sucesso!!')
        }else{
            alert ('Preencha o formulário corretamente antes de enviar!!')
        }
    }

    function mapaZoom(){
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function mapaNormal(){
        mapa.style.width = '400px'
        mapa.style.height = '250px'
    }

    function mudaCor1(){
        instag.style.color='red'
        
    }

    function voltarCor1(){
        instag.style.color='black'
        
    }

    function mudaCor2(){
        
        linked.style.color='red'
    }

    function voltarCor2(){
        linked.style.color='black'
    }






