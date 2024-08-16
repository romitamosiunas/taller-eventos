function saludar(event) {
    event.stopPropagation(); 
    alert('Hola!');
}

document.getElementById('miDiv').addEventListener('click', function() {
    alert('Hola! Soy el div');
});