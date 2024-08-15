function saludar() {
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('miDiv').addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});