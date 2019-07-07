$(document).ready(function () {
    $("#cont").click(function(){
        $("#panel").slideDown("slow");
    });

    $("#cont2").click(function(){
        $("#panel2").slideUp("slow");
    });

    $("#cont3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});

/*$(document).ready(function () {
    $("button").click(function () {
        $(".cuadro").animate({left: "500px", width: "500px", height: "+=500px"});
    });
});*/

$(document).ready(function () {
    $("button").click(function () {
        $(".cuadro").animate({left: "500px", width: "500px", height: "500px"});
    });
});

/*$(document).ready(function () {
    $("button").click(function () {
        var div = $(".cuadro");
        div.animate({height: "200px"}, "slow");
        div.animate({width: "200px"}, "slow");
    });
});*/