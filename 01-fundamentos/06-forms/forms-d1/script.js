/* Exercício 3
Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() */

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});