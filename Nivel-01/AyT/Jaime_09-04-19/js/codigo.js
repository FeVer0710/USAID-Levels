$(document).ready(function() {
    $("#mih1").click(function(){
        $(this).hide("slow").delay(3000).show("slow"); //delay = retraso
        /*$("#mih1").hide("slow").show("slow")
        ("#mih1").show("slow");*/
    });

    $("#texto1").click(function(){
        $(this).fadeOut(400).delay(1000).fadeIn("slow"); //slow=400
    });

    $("#div1").click(function(){
        $(this).fadeTo(500, 0.1).delay(1000).fadeTo(3000, 1);
    });
    $("#div2").click(function(){
        $(this).animate({height: 300}, "slow");
        $(this).animate({width: 300}, "slow");
        $(this).animate({height: 100}, "slow");
        $(this).animate({width: 100}, "slow");
        $(this).animate({left: "70%"}, "slow");
        $(this).animate({left: "0%"}, "slow");
        $(this).animate({fontSize: "40px"}, "slow");
        $(this).animate({fontSize: "0px"}, "slow");
    });
});