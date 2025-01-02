
console.log('Portfolio cargado correctamente');

// Inicializar EmailJS con tu usuario
(function() {
    emailjs.init("zwxfsEhaS-KxbvyDQ"); // Sustituye "user_id" por el ID de usuario que obtuviste de tu cuenta
})();

// Función para enviar el formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene la recarga de la página

    const message = document.getElementById('message').value;

    if (message.trim() === '') {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    const formData = {
        message: message
    };

    // Enviar el formulario usando EmailJS
    emailjs.send('3564612478', '36139397', formData)
        .then(function(response) {
            alert('¡Mensaje enviado con éxito!');
        }, function(error) {
            alert('Hubo un error, por favor intenta de nuevo.');
        });

    // Limpiar el campo de texto
    document.getElementById('message').value = '';
});
