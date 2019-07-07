var ingresos, enganche=0, cuota=0, costo;
function calculo(){
    ingresos=parseInt(document.getElementById("ingresos").value);
    costo=parseInt(document.getElementById("costo").value);
    if(ingresos<=8000){
        enganche=ingresos*0.15;
        cuota=parseFloat((costo-enganche)/120).toFixed(2);
    }
    else{
        enganche=ingresos*0.30;
        cuota= parseFloat((costo-enganche)/120).toFixed(2);
    }
    document.getElementById("salida").innerHTML=ingresos;
    document.getElementById("salida2").innerHTML=costo;
    document.getElementById("salida3").innerHTML=enganche;
    document.getElementById("salida4").innerHTML=cuota;
}
document.getElementById("calcular").addEventListener("click", calculo);