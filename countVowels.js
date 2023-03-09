function countVowels(word) {
        //Ponemos todas las vocales que queremos que cuenten
        const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ";
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
        //Con el méotodo return nos devuelve todas las vocales
        return vowelCount;
      }

console.log(countVowels("calor")); // Nos debería devolver 2
console.log(countVowels("la")); // Nos debería devolver 1
console.log(countVowels("crwth")); // Nos debería devolver 0 https://en.wikipedia.org/wiki/Crwth
