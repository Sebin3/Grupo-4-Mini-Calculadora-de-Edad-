const registrosEdad = [];

export function postEdad(fechaNacimiento, edad) {
  const hoy = new Date();
  const nuevoRegistro = {
    fechaNacimiento,
    edadCalculada: edad,
    fechaCalculo: hoy.toISOString().split('T')[0]
  };

  registrosEdad.push(nuevoRegistro);
  console.log("📥 POST simulado: cálculo guardado");
  console.table(registrosEdad);
}

export function getRegistros() {
  return registrosEdad;
}
