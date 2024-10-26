
//******************************************************************************** */
const textarea = document.getElementById('prompt');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
//******************************************************************************** */

document.getElementById('sendAPI').addEventListener('click', function() {
  // Mostrar el textarea
  document.getElementById('apiResponse').style.display = 'block';

  // Simular llamada a la API y mostrar la respuesta
  // Aquí puedes hacer una llamada real a tu API
  const apiResponse = "Esta es la respuesta de la API.";
  document.getElementById('apiResponse').value = apiResponse;
});
