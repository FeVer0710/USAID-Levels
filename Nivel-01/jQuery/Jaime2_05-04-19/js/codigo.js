$(document).ready(function(){
    //alert("El documento está preparado"); es el...
    $("#titulo").html('Título Modificado');
    $("#boton").click(function(){
        alert( $("#numero1").val());
    });
    //$("#numero1").val(); mismo
});
