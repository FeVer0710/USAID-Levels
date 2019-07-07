var dg, ln, mr, mrc, jv, vr, sb, promedio, mensaje;
function clima(){
    dg= parseInt(document.getElementById("dg").value);
    ln= parseInt(document.getElementById("ln").value);
    mr= parseInt(document.getElementById("mr").value);
    mrc= parseInt(document.getElementById("mrc").value);
    jv= parseInt(document.getElementById("jv").value);
    vr= parseInt(document.getElementById("vr").value);
    sb= parseInt(document.getElementById("sb").value);

    promedio=parseInt((dg+ln+mr+mrc+jv+vr+sb)/7).toFixed(0);
    if(promedio>=35){
        mensaje=("Que semana tan calurosa");
    }
    else if(promedio>=15 && promedio<35){
        mensaje=("Que clima tan delicioso");
    }
    else if(promedio<15){
        mensaje=("Que semana tan fria")
    }
    document.getElementById("salida").innerHTML=promedio+"°C";
    document.getElementById("salida2").innerHTML=mensaje;
}
document.getElementById("promediar").addEventListener("click",clima)