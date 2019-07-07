var edad, genero, cant, promH, promM, nH=0, nM=0, sumaH=0, sumaM=0;
cant=parseInt(prompt("Ingrese el numero de personas"));
for (let i=0;i<cant; i++){
    genero=prompt("Ingrese el genero de la persona M/F");
     edad=parseInt(prompt("Ingrese la edad de la persona"));
     if (genero=="M"){
        nh=nh+1;
        sumaH=sumaH+edad;
     }
     else {
         nM=nM+1;
         sumaM=sumaM+edad;
     }
}
promH=sumaH/nH;
promM=sumaM/nM;

document.getElementById("res").innerHTML="<p>"+"De un total de "+cant+" personas hay: "+nH+" Hombres y "+nM+" Mujeres. El promedio de edad de los hombres es de "+promH+" y el promedio de edad de las mujeres es de "+promM+"</p>";
