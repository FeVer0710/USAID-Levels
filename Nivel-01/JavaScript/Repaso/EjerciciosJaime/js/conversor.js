function Conversor1(){
    var Celsius1, Fahrenheit1;

    Celsius1 = document.getElementById('Celsius1').value;
    Celsius1 = parseFloat(Celsius1);

    Fahrenheit1 = ((Celsius1 * 9)/5)+32;

    document.getElementById('Fahrenheit1').value=Fahrenheit1;
}

function Conversor2(){
    var Fahrenheit2, Celsius2;

    Fahrenheit2 = document.getElementById('Fahrenheit2').value;
    Fahrenheit2 = parseFloat(Fahrenheit2);

    Celsius2 = ((Fahrenheit2 - 32)*5)/9;

    document.getElementById('Celsius2').value=Celsius2;
}
