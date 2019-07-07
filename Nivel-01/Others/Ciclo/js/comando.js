
function multi() {
    var numero,salida="", result;
    if (document.getElementById("n").value==""){
    salida="error";
}
else{
    numero=parseInt (document.getElementById("n").value);

for (let i=1;i<=10; i++) {
    result=numero*i;
    salida+="<p>"+numero+"x"+i+"="+result+"</p>";
 
}
}
document.getElementById("salida").innerHTML=salida;
}
document.getElementById("bt").addEventListener("click",multi);