# Count Vowels

Diseña una función que dado un string, cuente el número de vocales que tiene.

- La función a implementar recibe un parámetro de tipo string
- La función debe devolver un number

Recurda que puedes recorrer un string con un for al ser un tipo de dato iterable.
La palabra siempre estará en letras minúsculas.

Para ejecutar el programa, simplemente escribe en el terminal

`node countVowels.js`

## Si no sabes como plantearlo

- Escribe con lenguaje natural como resolverías este problema, sin codificar nada.
- No intentes resolverlo todo a la vez. Primero recorre todo el string y devuelve el número de carácteres que contiene. Así, para "patata"  tu función debería devolver un 6.
- Finalmente, ten en cuenta solo los carácteres que son una 'a', 'e', 'i', 'o' **o** 'u'.

### Bonus

Implementa también la función en el archivo **countVowels-bonus.js**.
La única diferencia es que en esta función recibimos dos palabras, y tenemos que contar las vocales de ambas palabras y retornar el cómputo.

Piensa en cómo reutilizar la funcionalidad para identificar si un carácter es una vocal o no.

`node countVowels-bonus.js`
