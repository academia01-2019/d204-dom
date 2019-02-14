// const quadrado = document.querySelector('.quadrado');
// const imgFaustao = document.querySelector('img');

// const mostrarQuadrado = function () {
//   quadrado.classList.toggle('visivel');
// }

// const destaqueImagem = function () {
//   imgFaustao.classList.toggle('destaque');
// }

// // quadrado.onmouseover = function () {
// //   quadrado.classList.toggle('visivel');
// // }

// quadrado.onmouseenter = mostrarQuadrado;
// quadrado.onmouseout = mostrarQuadrado;

// imgFaustao.onmouseenter = destaqueImagem;
// imgFaustao.onmouseout = destaqueImagem;

const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenuHamburguer = document.querySelector('.nav-menu-hamburguer');

const atualizarMenu = function () {
  menuHamburguer.classList.toggle('ativo');
  navMenuHamburguer.classList.toggle('visivel');
}

menuHamburguer.onclick = atualizarMenu;