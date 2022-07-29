const button = document.getElementById('button-menu');
const menu = document.getElementById('list-menu');
const background = document.getElementById('background');

button.addEventListener('click', () => {
    menu.classList.toggle('list-menu-content-show');
    background.classList.toggle('background');
    console.log('funciona');
})

const enviarForm = () => {
    document.form1.submit();
}

// VALIDAR FORM

const namee = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const paragraph = document.getElementById('warning');
const buttonSend = document.getElementById('button-send');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warningMessage = "";
    let enter = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    paragraph.innerHTML = "";

    if(namee.value.length < 3){
        warningMessage += '✘ El nombre no es valido <br>';
        enter = true;
    }

    if(!regexEmail.test(email.value)){
        warningMessage += '✘ El correo no es valido <br>';
        enter = true;
    }

    if(message.value.length < 8){
        warningMessage += '✘ El mensaje no es valido <br>';
        enter = true;
    }

    if(namee.value.length > 3 && regexEmail.test(email.value) && message.value.length > 8){
        warningMessage += '✔ Mensaje enviado <br>';
        enter = true;
        buttonSend.innerHTML = '<a href="javascript:enviarForm()">Enviar</a>';
        enviarForm();
        namee.value = '';
        email.value = '';
        message.value = '';
    }

    if(enter){
        paragraph.innerHTML = warningMessage;
    }

    if(paragraph.innerHTML.length > 0){
        paragraph.classList = ('warning-class');
    }else{
        paragraph.classList.remove('warning-class');
    }

    
})