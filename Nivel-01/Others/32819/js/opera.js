var num, num2, result
/*var suma= funtion(num,mun2){
    return n1+n2
}*/
var suma =(num,num2)=>num+num2;
var resta =(num,num2)=>num-num2;
var  multiplicacion=(num,num2)=>num*num2;
var  division=(num,num2)=>{if(n2==0)alert("no se puede dividir entre cero");
else
return num/num2
}
function Operaciones(){
    let num, num2, result;
    num=parseFloat(document.getElementById("n1").value);
    num2=parseFloat(document.getElementById("n2").value);
    if(document.getElementById("suma").checked){
        result=suma(num,num2);
    }
    else if(document.getElementById("resta").checked){
        result=resta(num,num2);
    }
    else if(document.getElementById("multiplicacion").checked){
        result=multiplicacion(num,num2);
    }
    else if(document.getElementById("division").checked){
        result=division(num,num2);
    }
    document.getElementById("r").value=result
}
document.getElementById("btn").addEventListener("click",Operaciones);