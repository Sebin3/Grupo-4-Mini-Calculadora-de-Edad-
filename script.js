import { postEdad, getRegistros } from './api.js';

function calcularEdad() {
  const input = document.getElementById("fechaNacimiento").value;

  if (!input) {
    document.getElementById("resultado").textContent = "Por favor, selecciona una fecha.";
    return;
  }

  const fechaNac = new Date(input);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const m = hoy.getMonth() - fechaNac.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  document.getElementById("resultado").textContent = `Tu edad es: ${edad} años.`;

  postEdad(fechaNac.toISOString().split('T')[0], edad);
  mostrarRegistrosEnPantalla();
}

function mostrarRegistrosEnPantalla() {
  const anterior = document.getElementById("listaRegistros");
  if (anterior) anterior.remove();

  const lista = document.createElement("ul");
  lista.id = "listaRegistros";

  const registros = getRegistros();
  registros.forEach(reg => {
    const li = document.createElement("li");
    li.textContent = `Nacido el ${reg.fechaNacimiento} → Edad: ${reg.edadCalculada} años`;
    lista.appendChild(li);
  });

  document.body.appendChild(lista);
}

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnCalcular");
    boton.addEventListener("click", calcularEdad);
  });


