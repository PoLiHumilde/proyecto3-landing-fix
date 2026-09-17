document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault(); // evita que la página se recargue
  var name = document.getElementById('name').value.trim();
  var date = document.getElementById('date').value;
  var service = document.getElementById('service').value;
  var msg = document.getElementById('form-msg'); // id correcto del HTML

  if (!name) {
    msg.textContent = 'Escribe tu nombre';
    msg.className = 'msg error';
    return;
  }
  if (!date) {
    msg.textContent = 'Elige una fecha';
    msg.className = 'msg error';
    return;
  }
  if (!service) {
    msg.textContent = 'Elige un servicio';
    msg.className = 'msg error';
    return;
  }

  msg.textContent = '¡Gracias ' + name + '! Te contactaremos.';
  msg.className = 'msg ok';
});
