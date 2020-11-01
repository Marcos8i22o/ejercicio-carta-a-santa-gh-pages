function validarNombre(nombre) {
  const contieneSoloLetras = /^[A-z]+$/.test(nombre);

  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!contieneSoloLetras) {
    return "Este campo sólo debe contener letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo ciudad debe contener al menos 1 caracter";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  const contieneSoloLetrasYNumeros = /^[a-z0-9]+$/i.test(descripcionRegalo);

  if (descripcionRegalo.length === 0) {
    return "El campo descripcionRegalo debe contener al menos 1 caracter";
  }
  if (descripcionRegalo.length >= 100) {
    return "El campo descripcionRegalo debe contener menos de 100 caracteres";
  }
  if (!contieneSoloLetrasYNumeros) {
    return "El campo descripcionRegalo sólo debe contener números y letras";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errores = {
    nombre: validarNombre(nombre),
    ciudad: validarCiudad(ciudad),
    "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo),
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = 'oculto';
    document.querySelector("#exito").className = "";
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  let cuentaErrores = 0;

  const $errores = document.querySelector("#errores");
  $errores.textContent = "";

  const keys = Object.keys(errores);

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;

      $errores.appendChild($error);

      cuentaErrores++;
    } else {
      $form[key].className = "";
    }
  });

  return cuentaErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
