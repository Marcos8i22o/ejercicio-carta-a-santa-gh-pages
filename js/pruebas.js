function probarValidarNombre() {
  console.assert(
    validarNombre("Pepe") === "",
    "Validar nombre no funcionó con un nombre correcto"
  );
  
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "aasdasdaokdoakdoakdajsdiojajdijoajiojdoijsdfiojisojdfiesoijojfosjdfoijoisjdoifjijiosdfoijnvjnsdf"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
  console.assert(
    validarNombre("444488") === "Este campo sólo debe contener letras",
    "Validar nombre no validó que el campo sólo contenga letras"
  );
}

function probarValidarCiudad() {
  console.assert (
    validarCiudad("Formosa") === "",
    "Validar ciudad no funcionó con una ciudad correcta"
  );
  
  console.assert(
    validarCiudad("") === "El campo ciudad debe contener al menos 1 caracter",
    "Validar ciudad no validó que el campo ciudad no sea vacío"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "Validar descripcionRegalo no funcionó con una descripción correcta"
  );
  
  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripcionRegalo debe contener al menos 1 caracter",
    "Validar descripcionRegalo no validó que el campo descripcionRegalo no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "123456789abcdefghijklmnopqrstuvwansijkdhaskudhasdhjahsdiuhasihdiausdaskljdklasjdaklsjdlaksjdakljsdklajsdklajsdklasjdioajciaosjcioasd"
    ) === "El campo descripcionRegalo debe contener menos de 100 caracteres",
    "Validar descripcionRegalo no validó que el campo descripcionRegalo tenga menos de 100 caracteres"
  );

  console.assert(
    validarDescripcionRegalo(".,.,.,.,") === "El campo descripcionRegalo sólo debe contener números y letras",
    "Validar descripcionRegalo no validó que el campo sólo contenga números y letras"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
