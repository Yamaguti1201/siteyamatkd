//---------------------------------jquery-------------------------------------

const $form = $("#form");
const $username = $("#username");
const $numero = $("#numero");
const $limitacoes = $("#limitacoes");
const $objetivo = $("#objetivo");

$form.on("submit", function (event) {
    event.preventDefault();
    checkForm();
});

$username.on("blur", function () {
    checkInputUsername();
});

$numero.on("blur", function () {
    checkInputNumero();
});

function checkInputUsername() {
    const usernameValue = $username.val();
    if (usernameValue === "") {
        errorInput($username, "Nome obrigatório");
    } else {
        const $formItem = $username.parent();
        $formItem.removeClass("error").addClass("form-content");
    }
}

function checkInputNumero() {
    const numeroValue = $numero.val();
    if (numeroValue === "") {
        errorInput($numero, "Número obrigatório");
    } else if (numeroValue.length !== 11) {
        errorInput($numero, "Número incompleto ou inválido");
    } else {
        const $formItem = $numero.parent();
        $formItem.removeClass("error").addClass("form-content");
    }
}

function checkForm() {
    checkInputUsername();
    checkInputNumero();

    const $formItems = $form.find(".form-content");
    const isValid = $formItems.toArray().every((item) => {
        return !$(item).hasClass("error");
    });

    if (isValid) {
        alert("Obrigado, entraremos em contato em breve!");
    }
    console.log(isValid);
}

function errorInput($input, message) {
    const $formItem = $input.parent();
    const $textMessage = $formItem.find("a");
    $textMessage.text(message);
    $formItem.addClass("error");
}


//------------------------------------javascript---------------------------------

// const form = document.getElementById("form")
// const username = document.getElementById("username")
// const numero = document.getElementById("numero")
// const limitacoes = document.getElementById("lmitacoes")
// const objetivo = document.getElementById("objetivo")

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     checkForm();
// })

// username.addEventListener("blur", ()=>{
//     checkInputUsername();
// })
// numero.addEventListener("blur", ()=>{
//     checkInputNumero();
// })

// function checkInputUsername() {
//     const usernameValue = username.value;
//     if (usernameValue === "") {
//         errorInput(username, "Nome obrigatório")
//     } else {
//         const formItem = username.parentElement;
//         formItem.className = "form-content"
//     }
// }

// function checkInputNumero() {
//     const numeroValue = numero.value;
//     if (numeroValue === "") {
//         errorInput(numero, "Número obrigatório")
//     } else if (numeroValue.length !== 11) {
//         errorInput(numero, "Coloque o incompleto ou invalido")
//     } else {
//         const formItem = numero.parentElement;
//         formItem.className = "form-content"
//     }
// }

// function checkForm() {
//     checkInputUsername();
//     checkInputNumero();

//     const formItems = form.querySelectorAll(".form-content")
//     const isValid = [...formItems].every((item) => {
//         return item.className !== "form-content error"
//     });
//     if(isValid){
//         alert("Obrigado, entraremos em contato em breve!")
//     }
//     console.log(isValid);
// }

// function errorInput(input, message) {
//     const formItem = input.parentElement;
//     const textMessage = formItem.querySelector("a")
//     textMessage.innerText = message;
//     formItem.className = "form-content error"
// }