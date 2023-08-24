/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newArray = [];

   for (let pop in objeto){
      newArray.push([pop , objeto[pop]])
   }
   
   return newArray
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código: 
   var arrayString = string.split("");
   var count;
   var arrayNumeros = [];
   var cont = 0;
   for (let i = 0 ; i < arrayString.length ; i++){
     var letra = arrayString[i]
      count = string.split(letra).length - 1;
      var index = arrayNumeros.indexOf( letra +  ": " + count)
      //console.log (index)
      if (index == -1){
       arrayNumeros[cont] =arrayString[i]  + ": " + count;
       cont = cont + 1;
      }
    }
    arrayNumeros.sort((a, b) => {
     if (a == b) {
       return 0;
     }
     if (a < b) {
       return -1;
     }
     return 1;
   });
   var newObjeto ={};
   var palabra = ""
   for (let i = 0 ; i < arrayNumeros.length ; i++){
     palabra = arrayNumeros[i].split(":").join(",") 
   newObjeto [palabra[0]] = Number(palabra[3])
   }
return newObjeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayString = string.split("")
   var valor = /^[A-Z]/ ;
   var arrayMayuscula=[];
   var contMAy = 0;
   var contMin = 0;
   var arrayMinuscula = [];
   
   
      for (i = 0 ; i< arrayString.length ; i++){
       var booleano = valor.test(arrayString[i])
      
         if (booleano == true){
           arrayMayuscula[contMAy]= arrayString[i];
           contMAy = contMAy + 1;
         }else {
           arrayMinuscula[contMin] = arrayString[i];
           contMin = contMin + 1;
         }
   
      }
      var letraModificada = arrayMayuscula.join("") + arrayMinuscula.join("")
    return letraModificada
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayOfStrings = frase.split(" ")
  
   var arrayInvertido = [];
   var letraInertida = "";
   for ( let  i = 0 ; i < arrayOfStrings.length ; i++){
      letraInertida = arrayOfStrings[i].split("").reverse().join("");
      arrayInvertido[i] = letraInertida;
   }
   var fraseInvertida = arrayInvertido.join(" ")
return fraseInvertida
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if (numero == numero.toString().split("").reverse().join("")){
      return ("Es capicua");
      }else  {
         return ("No es capicua");
      }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:,
   var letra = string.split(""), palabraNueva = "";
   for (var i = 0 ; i < string.length ; i++){
      if (letra[i] == "a" ||letra[i] == "b" || letra[i] =="c"){
         
      }else{
         palabraNueva = palabraNueva + letra[i]
      }
   }
   return palabraNueva; 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
  
   var arrayOrdenado = arrayOfStrings.sort ((a, b) => a.length - b.length)

return arrayOrdenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arayCombinado = [];
   var valor ;
   var valorConvinado;
   var cont  =0 ;
      for (i = 0 ; i < array1.length ; i++){
        valor = array2.includes(array1[i]);
            if ( valor == true){
             valorConvinado = arayCombinado.includes(array1[i])
             if ( valorConvinado == false){
             arayCombinado[cont] = array1[i];
             cont = cont + 1;
             }
            }
         
      }
         return arayCombinado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
