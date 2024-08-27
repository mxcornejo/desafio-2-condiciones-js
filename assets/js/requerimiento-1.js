// Requerimiento 1

document.getElementById("image-1").addEventListener("click", () => {
  const element = document.getElementById("image-1");
  if (element) {
    if (element.classList.contains("border-color")) {
      element.classList.remove("border-color");
    } else {
      element.classList.add("border-color");
    }
  }
});
