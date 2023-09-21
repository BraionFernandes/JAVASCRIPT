//Exiba o número de palavras presentes em uma frase.

frase = "Eu me chamo Braion Fernandes Dos Reis."

contadorEspaco = 0;
for(i = 0; i < frase.length; i++){
    if(frase[i] == ' '){
        contadorEspaco++;
    }
}

contadorEspaco++

console.log(`Sua frase tem ${contadorEspaco} palavras.`)