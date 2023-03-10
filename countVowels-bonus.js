function countVowels(word, anotherWord) {

  //Ponemos todas las vocales que queremos contar en un string
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ"; //He añadido vocales con varios acentos para que no deje de contarlas
  //Iniciamos una variable que lleva la cuenta de las vocales
  let vowelCount = 0;

    /* Este bucle for recorre todos los argumentos de la función (en este caso word, anotherWord)
    Usando este código lo hacemos facilmente escalable ya que podemos añadir argumentos
    ad infinitum y siempre nos va a recorrer el length (la cantidad de argumentos) */
    for (let k = 0; k < arguments.length; k++)
    {
      // Guardamos el input actual en una variable llamada "palabra"
      palabra=arguments[k]
      //Este bucle for recorre todo el string de la palabra actual letra por letra
      for (let i = 0; i < palabra.length; i++) {
      //La letra actual del bucle se comprueba si está en nuestra lista de vocales "vowels"
      if (vowels.includes(palabra[i])) {
      //En el caso de ser así la variable suma +1
      vowelCount++;
        }

      }
      /* Alexander recuerda tristemente como se tiró dos horas preguntandose por qué falla el código
      habiendo puesto el return en el bucle anterior */
    }
    // Este return nos devuelve el número total de vocales
    return vowelCount;
  }

  console.log(countVowels("calor", "solano")); // Nos devuelve 5
  console.log(countVowels("palabras","aleatorias","para","comprobar","que","el","codigo","escala","hermano")) // Nos devuelve 26