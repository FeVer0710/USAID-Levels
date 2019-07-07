$(document).ready(function() {
    //FadeOut
    $("#btnFadeOut").click(function(){
        $("#box").fadeOut("slow");
    });
    //FadeIn
    $("#btnFadeIn").click(function(){
        $("#box").fadeIn("slow");
    });
    //FadeToggle
    $("#btnFadeTog").click(function(){
        $("#box").toggle("slow");
    });
    //SlideDown
    $("#btnSlideDown").click(function(){
        $("#box2").slideDown("slow");
    });
    //SlideUp
    $("#btnSlideUp").click(function(){
        $("#box2").slideUp("slow");
    });
    //SlideToggle
    $("#btnSlideTog").click(function(){
        $("#box2").slideToggle("slow");
    });
    //Derecha
    $("#btnMoveRight").click(function () {
        $("#img").animate({
            marginLeft: "500px"
        }, "slow");
    });
    //Izquierda
    $("#btnMoveLeft").click(function () {
        $("#img").animate({
            marginLeft: "0px"
        }, "slow");
    });
    //Around
    $("#btnMoveAround").click(function () {
        $("#img").animate({
            marginLeft: "500px"
        }, "slow");

        $("#img").animate({
            marginTop: "250px"
        }, "slow");

        $("#img").animate({
            marginLeft: "0px"
        }, "slow");

        $("#img").animate({
            marginTop: "0px"
        }, "slow");
    });
    //Desvanecer
    $("#btnDesvanecer").click(function(){
        $("#img").fadeTo(500, 0.1).delay(1000).fadeTo(3000, 1);
    });

    $("#btnTopBotton").click(function () {
        $("#img2").animate({
            marginTop: "500px"
        }, "slow");

        $("#img2").animate({
            marginTop: "0px"
        }, "slow");
    });

    $("#btnTop").click(function () {
        $("#img2").animate({
            marginTop: "500px"
        }, "slow");
    });

    $("#btnBotton").click(function () {
        $("#img2").animate({
            marginTop: "0px"
        }, "slow");
    });
    
});
