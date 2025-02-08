document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    alert(`Gracias, ${nombre}. Hemos recibido tu mensaje.`);
    
    this.reset();
});
