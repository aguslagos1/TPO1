
function validation() {
    var formulario = document.getElementById('contact-form'),
        boton = document.getElementById('form-button');

    if (formulario.firstname.value == 0) {
        alert("Complete con su nombre");
    }
    if (formulario.surname.value == 0) {
        alert("Complete con su apellido");
    }
    if (formulario.comp_name.value == 0) {
        alert("Complete con el nombre de su compañía");
    }



    if (Number(formulario.telnumber.value) == NaN) {
        alert("Complete con un numero");
    }



    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(formulario.email.value)) {
    } else {
        alert("Complete con un email válido");
    }

}
