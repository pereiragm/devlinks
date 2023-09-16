function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light") // Código equivalente ao if/else

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Guilherme Pereira sorrindo, usando camiseta preta e com fundo branco."
    )
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Guilherme Pereira sério, usando camiseta preta e com fundo branco."
    )
  }
}
