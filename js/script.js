let form = document.querySelector('#signup')

form.onsubmit = function(evento){
    evento.preventDefault()

    let input_nome = document.forms['signup']['name']

    if(!input_nome.value){
        input_nome.classList.add('input_error')

        let span = input_nome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        input_nome.classList.remove('input_error')
        let span = input_nome.nextSibling.nextSibling
        span.innerText = ''
    }

    let input_email = document.forms['signup']['email']

    if(!input_email.value){
    input_email.classList.add('input_error')

    let span = input_email.nextSibling.nextSibling
    span.innerText = 'Digite o email corretamente'
    } else {
        input_email.classList.remove('input_error')
        let span = input_email.nextSibling.nextSibling
        span.innerText = ''
    }

    let input_number = document.forms['signup']['number']

    if(!input_number.value){
        input_number.classList.add('input_error')

    let span = input_number.nextSibling.nextSibling
    span.innerText = 'Digite o CPF corretamente'
    } else {
        input_number.classList.remove('input_error')
        let span = input_number.nextSibling.nextSibling
        span.innerText = ''
    }

    let input_sex = document.forms['signup']['radio']

    if(!input_sex.value){
        input_sex.classList.add('input_error')

    let span = input_sex.nextSibling.nextSibling
    span.innerText = 'Selecione o seu sexo'
    }
}

