let form = document.querySelector('#formulaire');
form.addEventListener('click', function (e) {
  e.preventDefault();
  window.alert('message envoyer');
})