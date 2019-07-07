var letra, mensaje;
function vocales(){
    letra= document.getElementById("vocal").value;
    if(letra=="a"){
        mensaje="Es una vocal";
    }
    else if(letra=="e"){
        mensaje="Es una vocal";
    }
    else if(letra=="i"){
        mensaje="Es una vocal";
    }
    else if(letra=="o"){
        mensaje="Es una vocal";
    }
    else if(letra=="u"){
        mensaje="Es una vocal";
    }
    else{
        mensaje="No es una vocal";
    }
    document.getElementById("salida").innerHTML=mensaje;
}
document.getElementById("mostrar").addEventListener("click", vocales)