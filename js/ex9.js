let Media = parseFloat(prompt("Informe a média: "));

if(Media >=7.0){
    alert("Média: "+ Media.toFixed(1) + "\nAprovado!");
}

else if (Media >=5.0 && Media <=6.9){
    alert("Média: "+ Media.toFixed(1) + "\nRecuperação!");

}

else if(Media <5){
        alert("Média: "+ Media.toFixed(1) + "\nReprovado!");

}