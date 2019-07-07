
function numeroCubico(){
    var base, potencia, resultado;

    base = document.getElementById('base').value;
    base = parseInt(base);

    potencia = document.getElementById('potencia').value;
    potencia = parseInt(potencia);

    resultado = Math.pow(base, potencia);

    if(base<0 || potencia<0){
        alert('Error');
    }

    else{
    alert('El número '+base+' elevado al '+potencia+' es: '+resultado);
    }
}