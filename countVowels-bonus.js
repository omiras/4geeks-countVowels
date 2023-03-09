function countVowels(word, anotherWord) {
    //Ponemos todas las vocales que queremos que cuenten
    const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ"; //He añadido vocales con varios acentos para que no deje de contarlas
    //Iniciamos una variable que lleva la cuenta de las vocales
    let vowelCount = 0;
    
    //Este bucle for recorre todo el string
    for (let i = 0; i < word.length; i++) {
    //La letra que está comprobando se comprueba si está en nuestra lista de vocales "vowels"
      if (vowels.includes(word[i])) {
            //En el caso de ser así la variable suma +1
        vowelCount++;
      }
    }

    //Ya que estamos manipulando la misma variable simplemente copiaré el mismo bucle for cambiando "word" por "anotherWord"
    //Ya que si encuentra vocales en la segunda palabra las añadirá a la misma variable evitando tener que sumarlas luego
    for (let i = 0; i < anotherWord.length; i++) {
    //De nuevo la letra que está comprobando el bucle se comprueba si está en nuestra lista de vocales "vowels"
        if (vowels.includes(anotherWord[i])) {
            //En el caso de ser así la variable suma +1 de nuevo
        vowelCount++;
      }
    }

    //Con el méotodo return nos devuelve todas las vocales
    return vowelCount;
}

console.log(countVowels("calor", "sal")); // 3
console.log(countVowels("la", "le")); // 2
console.log(countVowels("crwth", "crwth")); // 0 https://en.wikipedia.org/wiki/Crwth
console.log(countVowels("Óscar", "âcèntöTèst")) // 6