const btn = document.getElementById("btn-convertir");

btn.addEventListener('click', function(){
    let temp = document.getElementById('temperatura').value;
    let valor = document.getElementById('valor').value;

    if(valor ==1){
        temp = Math.round((temp * 9/5)+ 32,2)//farenheit
        document.getElementById('resultado').textContent = "La temperatura en Fahrenheit es: "+temp+" F°";
        temp=0;
    }else{
        temp= Math.round((temp - 32) * 5/9, 2); //celcius
        document.getElementById('resultado').textContent ="La temperatura en Celsius es: "+temp+" C°" ;
        temp=0;
    }
}) 