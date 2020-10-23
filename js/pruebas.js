function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "El campo ciudad debe contener al menos 1 caracter",
    "Validar ciudad no validó que el campo ciudad no sea vacío"
  );
}

probarValidarNombre();
probarValidarCiudad();


