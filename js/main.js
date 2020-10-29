const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre (nombre) {
    const contieneSoloLetras = /^[A-z]+$/.test(nombre);

    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!contieneSoloLetras) {
        return 'Este campo sólo debe contener letras';
    }

    return '';
}

function validarCiudad (ciudad) {
    if (ciudad.length === 0) {
        return 'El campo ciudad debe contener al menos 1 caracter';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    const contieneSoloLetrasYNumeros = /^[a-z0-9]+$/i.test(descripcionRegalo);

    if (descripcionRegalo.length === 0) {
        return 'El campo descripcionRegalo debe contener al menos 1 caracter';
    }
    if (descripcionRegalo.length >= 100) {
        return 'El campo descripcionRegalo debe contener menos de 100 caracteres';
    }
    if (!contieneSoloLetrasYNumeros){
        return 'El campo descripcionRegalo sólo debe contener números y letras';
    }

    return '';
}

// function validarForm() {
//     const errorNombre = validarNombre(nombre);
//     console.log(manejarErrores(errores));
    
// }

// function manejarErrores(errores) {
//     if (!errores) {
//         console.log("éxito");
//     } else {
//         console.log(errores);
//     }
// }


validarNombre(nombre);
validarCiudad(ciudad);

