/*$(document).ready(function() {
    $("button").click(function(){
        //Acción
        $("#parrafo").hide(); //hide = ocultar
    })
});*/

//Selectores
//Cuado es por etiqueta ("h1")
//Cuado es por id ("#id")
//Cuado es por class (".class")

/*$(document).ready(function() {
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});*/

$(document).ready(function() {
    $("#hide").click(function(){
        $("img").hide(1000);
    });
    $("#show").click(function(){
        $("img").show(1000);
    });
});