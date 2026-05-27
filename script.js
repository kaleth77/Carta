// script.js

const fechaApertura = new Date("2026-05-30T00:00:00").getTime();

const contador = document.getElementById("contador");

const bloqueado = document.getElementById("bloqueado");

const contenido = document.getElementById("contenido");

const intervalo = setInterval(() => {

  const ahora = new Date().getTime();

  const distancia = fechaApertura - ahora;

  const dias = Math.floor(
    distancia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutos = Math.floor(
    (distancia % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const segundos = Math.floor(
    (distancia % (1000 * 60))
    / 1000
  );

  contador.innerHTML =
  `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  // DESBLOQUEAR

  if (distancia < 0){

    clearInterval(intervalo);

    bloqueado.style.display = "none";

    contenido.style.display = "block";

  }

},1000);
