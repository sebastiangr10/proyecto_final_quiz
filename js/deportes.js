var nombre;

document.getElementById("form").style.display = "none";
document.getElementById("resultados").style.display = "none";

function p1 () {
    for(i=1; i<=12; i++) {
        if(i != 1) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
    }
}
function p2 () {
    for(i=1; i<=12; i++) {
        if(i != 2) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block"
            document.getElementById("btnradio"+i).checked = true;
        }
    }
}
function p3 () {
    for(i=1; i<=12; i++) {
        if(i != 3) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p4 () {
    for(i=1; i<=12; i++) {
        if(i != 4) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p5 () {
    for(i=1; i<=12; i++) {
        if(i != 5) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p6 () {
    for(i=1; i<=12; i++) {
        if(i != 6) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p7 () {
    for(i=1; i<=12; i++) {
        if(i != 7) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p8 () {
    for(i=1; i<=12; i++) {
        if(i != 8) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false; 
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p9 () {
    for(i=1; i<=12; i++) {
        if(i != 9) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p10 () {
    for(i=1; i<=12; i++) {
        if(i != 10) {
            document.getElementById("p"+i).style.display = "none";
            document.getElementById("btnradio"+i).checked = false;
        }
        else {
            document.getElementById("p"+i).style.display = "block";
            document.getElementById("btnradio"+i).checked = true;
        }
      }
}
function p11 () {
  for(i=1; i<=12; i++) {
      if(i != 11) {
          document.getElementById("p"+i).style.display = "none";
          document.getElementById("btnradio"+i).checked = false;
      }
      else {
          document.getElementById("p"+i).style.display = "block";
          document.getElementById("btnradio"+i).checked = true;
      }
    }
}
function p12 () {
  for(i=1; i<=12; i++) {
      if(i != 12) {
          document.getElementById("p"+i).style.display = "none";
          document.getElementById("btnradio"+i).checked = false;
      }
      else {
          document.getElementById("p"+i).style.display = "block";
          document.getElementById("btnradio"+i).checked = true;
      }
    }
}
function jugar () {
    nombre = document.getElementById("nombre").value
    document.getElementById("inicio").style.display = "none"
    document.getElementById("form").style.display = "block"
    p1();
}
function finalizar() {
    var contador = [];

    document.getElementById("inicio").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("resultados").style.display="block";

    for(i=1; i<=12; i++) {
        if(document.getElementById("cor"+i).checked) {
            contador.push("1")
        }
    }

    if(contador.length >=0 && contador.length <6) {
        document.getElementById("desemp").innerHTML="Bajo"
    }
    else if(contador.length >=6 && contador.length <9) {
        document.getElementById("desemp").innerHTML="Básico"
    }
    else if(contador.length >=9 && contador.length <12) {
        document.getElementById("desemp").innerHTML="Alto"
    }
    else if(contador.length == 12) {
        document.getElementById("desemp").innerHTML="Superior"
    }

    document.getElementById("name").innerHTML=nombre;
    document.getElementById("resultado").innerHTML=contador.length;
}
    