// Requerimiento 2

document.getElementById("calcular").addEventListener("click", () => {
  const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  const totalStickers = sticker1 + sticker2 + sticker3;

  const resultado = document.getElementById("resultado");

  if (totalStickers <= 10) {
    resultado.textContent = `Llevas ${totalStickers} stickers.`;
  } else {
    resultado.textContent = "Llevas demasiados stickers.";
  }
});
