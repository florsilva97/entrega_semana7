 
const div = document.getElementsByTagName("div");

div.addEventListener("click", function() {
    alert("Hola! soy el Div");
    div.stopPropagation();
});
