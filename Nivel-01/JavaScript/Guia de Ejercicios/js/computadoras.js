var cantidad, descuento=0, precio=11000, subtotal, total;
function factura(){
    cantidad= parseInt(document.getElementById("n1").value);
     subtotal=cantidad*precio;
    if(cantidad<5){
        descuento=subtotal*0.10;
        total=subtotal-descuento;
    }
    else if(cantidad>=5 && cantidad<10){
        descuento=subtotal*0.20;
        total=subtotal-descuento;
    }
    else if(cantidad>=10){
        descuento=subtotal*0.40;
        total=subtotal-descuento;
    }
    document.getElementById("salida").innerHTML=cantidad;
    document.getElementById("salida2").innerHTML=precio+"&#36";
    document.getElementById("salida3").innerHTML=descuento+"&#36";
    document.getElementById("salida4").innerHTML=subtotal+"&#36";
    document.getElementById("salida5").innerHTML=total+"&#36";
}
document.getElementById("calcular").addEventListener("click", factura);