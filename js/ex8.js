let Peso = parseFloat(prompt("Informe o seu peso em kgs: "));

let Altura = parseFloat(prompt("Informe a sua altura em metros:"));

let IMC = Peso/(Math.pow(Altura,2.0)); // ** operador para potência

if(IMC <16){

    alert("IMC: "+ IMC.toFixed(2) + "\nBaixo peso (Grau I)");
}

else if(IMC >=16 && IMC<=16.99){

        alert("IMC: "+ IMC.toFixed(2) + "\nBaixo peso (Grau II)");

}

else if (IMC >=17 && IMC <=18.49){

        alert("IMC: "+ IMC.toFixed(2) + "\nBaixo peso (Grau III)");

}

else if(IMC >=18.50 && IMC <=24.99){

        alert("IMC: "+ IMC.toFixed(2) + "\nPeso adequado");

}

else if (IMC >=25 && IMC <=29.99){
        alert("IMC: "+ IMC.toFixed(2) + "\nSobrepeso");

}

else if (IMC >=30 && IMC <=34.99){
        alert("IMC: "+ IMC.toFixed(2) + "\nObesidade (Grau I)");

}

else if (IMC >=35 && IMC <=39.99){
        alert("IMC: "+ IMC.toFixed(2) + "\nObesidade (Grau II)");

}

else if (IMC >=40){
        alert("IMC: "+ IMC.toFixed(2) + "\nObesidade (Grau III)");

}

