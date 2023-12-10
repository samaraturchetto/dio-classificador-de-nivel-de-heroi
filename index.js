var nomeHeroi = "Osvaldo"
var quantidadeExperiencia = parseInt(Math.random() * 15000) + 1;
var nivel = ""


if (quantidadeExperiencia < 1001) 
    nivel = "Ferro"
else if (quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000) 
    nivel = "Bronze"
else if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000) 
    nivel = "Prata"
else if (quantidadeExperiencia > 5000 && quantidadeExperiencia <= 6000) 
    nivel = "Ouro"
else if (quantidadeExperiencia > 6000 && quantidadeExperiencia <= 7000) 
    nivel = "Platina"
else if (quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000) 
    nivel = "Diamante"
else if (quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000) 
    nivel = "Ascendente"
else if (quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000) 
    nivel = "Imortal"
else  
    nivel = "Radiante"


console.log("O Herói de nome " + nomeHeroi + ", com " + quantidadeExperiencia + "XP, está no nível " + nivel + ".")