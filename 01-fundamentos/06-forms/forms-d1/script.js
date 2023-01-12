/* Exercício 3
Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() 

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});
*/

/* Exercício 5 (bônus). A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações. */

const allowUploadPhotos = document.getElementById('allow-upload-photos-chkbox');
allowUploadPhotos.onclick = (event) => {
  const uploadPhotosInput = document.getElementById('my-photos-input');
  if (event.target.checked) {
    uploadPhotosInput.disabled = false;
  } else {
    uploadPhotosInput.disabled = true;
    uploadPhotosInput.value = '';
  }
}

window.onload = () => {
  document.getElementById('my-photos-input').disabled = true;
  document.getElementById('trybetrip-form').reset();
}


/* Exercício 6 (bônus).Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: `‘Dados Inválidos’`. Caso contrário, a mensagem `‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’` deverá aparecer na tela.
 */

function checkSizeFields(targetObject, minSize, maxSize) {
  if (targetObject.value.length >= minSize && targetObject.value.length <= maxSize) {
    return true
  }
  return false
}
const submitButton = document.getElementById('submit-button');
submitButton.onclick = () => {
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userAnswer = document.getElementById('answer');

  const validNameInput = checkSizeFields(userName, 10, 40)
  const validEmailInput = checkSizeFields(userEmail, 10, 50)
  const validAnswerInput = checkSizeFields(userAnswer, 0, 500)

  if (validNameInput && validEmailInput && validAnswerInput) {
    window.alert('Dados enviados com sucesso! \nObrigado por participar do concurso TrybeTrip.');
  } else {
    window.alert('Dados Inválidos');
  }
};

