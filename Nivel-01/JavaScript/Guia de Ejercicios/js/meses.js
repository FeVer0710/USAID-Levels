var numero, mensaje;
function mes(){
    numero=document.getElementById("numero").value;
     if(numero==1){
         mensaje="Enero";
     }
     else if(numero==2){
         mensaje="Febrero";
     }
     else if(numero==3){
        mensaje="Marzo";
    }
    else if(numero==4){
        mensaje="Abril";
    }
    else if(numero==5){
        mensaje="Mayo";
    }
    else if(numero==6){
        mensaje="Junio";
    }
    else if(numero==7){
        mensaje="Julio";
    }
    else if(numero==8){
        mensaje="Agosto";
    }
    else if(numero==9){
        mensaje="Septiembre";
    }
     else if(numero==10){
        mensaje="Octubre";
    }
     else if(numero==11){
        mensaje="Noviembre";
    }
    else if(numero==12){
        mensaje="Diciembre";
    }
    else{
        mensaje="Error escriba un numero correcto";
    }
    document.getElementById("salida").innerHTML=mensaje;
}
document.getElementById("mostrar").addEventListener("click",mes) 