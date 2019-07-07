var pre, des, subt, total, cant;

function ejer1(){
    pre=parseFloat(document.getElementById("pre").value);
    cant=parseInt(document.getElementById("cant").value);
    des=parseFloat(document.getElementById("desc").value);
    subt=parseFloat(document.getElementById("subt").value);
    total=parseFloat(document.getElementById("total").value);
    subt=cant*pre;
    if (subt<20000){
    des=subt*0.15;
    total=subt-des;
    }
    else{
        des=subt*0.35;
        total=subt-des;
    }
document.getElementById("desc").value=des;
document.getElementById("subt").value=subt;
document.getElementById("total").value=total;
}
document.getElementById("btn").addEventListener("click",ejer1);