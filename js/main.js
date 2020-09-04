var paragraph = document.getElementById("opis");
var button = document.querySelector('#klik');

button.onclick = function () {
    paragraph.innerText = "To jest opis produktu";
}   