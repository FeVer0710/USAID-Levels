$(document).ready(function() {
    $("#b1").click(function(){
        $(".img1").animate({height: 300}, "slow");
        $(".img1").animate({width: 500}, "slow");
    });
    $("#b2").click(function(){
        $(".img1").hide("slow");
        $(".img1").hide("slow");
    });

    $("#b3").click(function(){
        $(".img2").animate({height: 500}, "slow");
        $(".img2").animate({width: 350}, "slow");
    });
    $("#b4").click(function(){
        $(".img2").hide("slow");
        $(".img2").hide("slow");
    });

    $("#b5").click(function(){
        $(".img3").animate({height: 300}, "slow");
        $(".img3").animate({width: 500}, "slow");
    });
    $("#b6").click(function(){
        $(".img3").hide("slow");
        $(".img3").hide("slow");
    });
});