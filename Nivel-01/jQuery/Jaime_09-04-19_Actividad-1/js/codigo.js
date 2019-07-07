$(document).ready(function() {
    $("#ocultar").click(function(){
        $("p").hide(1000);
    });
    $("#mostrar").click(function(){
        $("p").show(1000);
    });
});

$(document).ready(function() {
    $("#boton").click(function(){
        $("#parraf1").toggle(1000);
    });
    $("#boton").click(function(){
        $("#parraf2").toggle(1000);
    });
});

$(document).ready(function() {
    $("#boton2").click(function(){
        $("#div1").fadeIn("slow");
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(1000);
    });
});

$(document).ready(function() {
    $("#boton3").click(function(){
        $("#div11").fadeOut("slow");
        $("#div22").fadeOut("slow");
        $("#div33").fadeOut(1000);
    });
});

$(document).ready(function() {
    $("#boton4").click(function(){
        $("#div01").fadeTo("slow", 0.50); //0.50 = nivel de opacidad
        $("#div02").fadeTo("slow", 0.50);
        $("#div03").fadeTo("slow", 0.50);
    });
});