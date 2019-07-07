function suma(n1, n2){
    return n1+n2;
}

function resta(n1, n2){
    return n1-n2;
}

function multiplicar(n1, n2){
    return n1*n2;
}

function dividir(n1, n2){
    return n1/n2;
}
$(document).ready(function(){
    $("#btn").click(function(){
        var n1, n2, resultado;
        n1= parseInt($("#numero1").val());
        n2= parseInt($("#numero2").val());
        resultado = suma(n1, n2);
        $("#result").val(resultado);
    });

    $("#btn2").click(function(){
        var n1, n2, resultado;
        n1= parseInt($("#numero1").val());
        n2= parseInt($("#numero2").val());
        resultado = resta(n1, n2);
        $("#result").val(resultado);
    });

    $("#btn3").click(function(){
        var n1, n2, resultado;
        n1= parseInt($("#numero1").val());
        n2= parseInt($("#numero2").val());
        resultado = multiplicar(n1, n2);
        $("#result").val(resultado);
    });

    $("#btn4").click(function(){
        var n1, n2, resultado;
        n1= parseInt($("#numero1").val());
        n2= parseInt($("#numero2").val());
        resultado = dividir(n1, n2);
        if(n2==0){
            $("#result").val('No se divide entre cero');
        }
        else{
        $("#result").val(resultado);
        }
    });
});