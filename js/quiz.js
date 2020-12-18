document.getElementById("categorias").style.display="none"
let nombre;
nombre=document.getElementById("nombre").value;
function empezar(){
    document.getElementById("instrucciones").style.display="none"
    document.getElementById("categorias").style.display="block"
}
function regresar(){
    document.getElementById("categorias").style.display="none"
    document.getElementById("instrucciones").style.display="block"
}
