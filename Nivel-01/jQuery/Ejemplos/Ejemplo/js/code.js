$(document).ready(function() {
    $("button").click(function(){
        $('#div1').animate({height: 300}, "slow");
        $('#div1').animate({width: 300}, "slow");
        $('#div1').animate({height: 100}, "slow");
        $('#div1').animate({width: 100}, "slow");
        $('#div1').animate({left: "70%"}, "slow");
        $('#div1').animate({marginTop: "70%"}, "slow");
        $('#div1').animate({left: "0%"}, "slow");
        $('#div1').animate({marginTop: "0%"}, "slow");
    });
});