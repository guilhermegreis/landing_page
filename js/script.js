let form = document.querySelector('#signup')

form.onsubmit = function(evento){
    evento.preventDefault()

    validate_input('name', 'Digite o nome corretamente');
    validate_input('email', 'Digite o email corretamente');
    validate_input('number', 'Digite o CPF corretamente');
    validate_input('sex', 'Selecione o seu sexo');
};

function validate_input(input_name, error_message) {
    let input = document.forms['signup'][input_name];
    let span = input.closest('.input_wrapper').querySelector('.error-message');

    if(!input.value) {
        input.classList.add('input_error');
        span.innerText = error_message;
    } else {
        input.classList.remove('input_error');
        span.innerText = '';
    }
}

function validate_select(input_name, error_message) {
    let select = document.forms['signup'][input_name];
    let span = select.closest('.input_wrapper').querySelector('.error-message');

    if(!select.value) {
        select.classList.add('input_error');
        span.innerText = error_message;
    } else {
        select.classList.remove('input_error');
        span.innerText = '';
    }
};

let form2 = document.querySelector('#form_share')

form2.onsubmit = function(evento){
    evento.preventDefault()

    validate_input2('name', 'Digite o nome corretamente');
    validate_input2('email', 'Digite o email corretamente');
};

function validate_input2(input_name, error_message) {
    let input = document.forms['form_share'][input_name];
    let span = input.closest('.input_share').querySelector('.error-message');

    if(!input.value) {
        input.classList.add('input_error');
        span.innerText = error_message;
    } else {
        input.classList.remove('input_error');
        span.innerText = '';
    }
}

