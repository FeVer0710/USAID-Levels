var n1, mensaje;
function reloj(){
    n1=parseInt(document.getElementById("n1").value);
    if(n1>=6 && n1<=12){
        mensaje="Buenos días";
    }
    else if(n1>=13 && n1<=20){
        mensaje="Buenas tardes";
    }
    else {
        mensaje="Buenas noches"
    }
    document.getElementById("salida").innerHTML=mensaje;
}
document.getElementById("calcular").addEventListener("click", reloj);