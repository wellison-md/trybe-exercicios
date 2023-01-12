/* Exercício 3
Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() */

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

/* Exercício 5 (bônus). A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações. */

const allowUploadPhotos = document.getElementById('allow-upload-photos-chkbox');
allowUploadPhotos.onclick = (event) => {
  const uploadPhotosInput = document.getElementById('my-photos-input');
  if (event.target.checked) {
    uploadPhotosInput.disabled = false;
  } else {
    uploadPhotosInput.disabled = true;
  }
}

window.onload = () => {
  document.getElementById('my-photos-input').disabled = true;
  document.getElementById('trybetrip-form').reset();
}
