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
let current_page = 1;

async function carregar_produtos() {
    try {
        current_page++;
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${current_page}`)
        const data = await response.json();

        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box, index) => {
            const product = data.products[index];
            if(product) {
                const {name, image, description, oldPrice, price, installments} = product;

                const product_name = `Produto Número ${index + 1}`;
                const product_description = "Descrição do Produto";
                const installmentCount = installments.count;
                const installmentValue = installments.value;
                const installment_text = `ou ${installmentCount}x de R$ ${installmentValue}`;


                    const productHTML = `
                        <div class="product">
                            <img src="${image}" alt="${name}" class="product_image">
                            <h3 class="productName">${product_name}</h3>
                            <p class="productDescription">${product_description}</p>
                            <div class="product_price">
                                <span class="old_price">De: ${oldPrice}</span><br>
                                <span class="price">Por: ${price}</span>
                                <span class="installments">${installment_text}</span><br><br>
                                <button class="buy_button">Comprar</button>
                            </div>
                        </div>
                    `;
                    box.innerHTML = productHTML;
            }
        });
    } catch (error) {
        console.error('Ocorreu um erro ao carregar os produtos:', error);
    }
}
document.addEventListener('DOMContentLoaded', carregar_produtos);
const mais_produtos = document.querySelector('.more');
mais_produtos.addEventListener('click', carregar_produtos);