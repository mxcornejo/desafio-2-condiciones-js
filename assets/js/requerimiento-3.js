// Requerimiento 3

document.getElementById("ingresar").addEventListener("click", () => {
  const numero1 = document.getElementById("number-select-1").value;
  const numero2 = document.getElementById("number-select-2").value;
  const numero3 = document.getElementById("number-select-3").value;

  const passwordIngresado = `${numero1}${numero2}${numero3}`;

  const resultado = document.getElementById("resultado");

  if (passwordIngresado === "911") {
    resultado.textContent = "Password 1 correcto";
  } else if (passwordIngresado === "714") {
    resultado.textContent = "Password 2 es correcto";
  } else {
    resultado.textContent = "Password incorrecto";
  }
});
