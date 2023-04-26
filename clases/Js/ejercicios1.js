//& 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("Hello World");

//& 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.write("Hello World. " + "<br>"+ "<br>");
document.write(`★★★★★★★★ <br> <br>`)

//& 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

let suma=3+5;
document.write("El resultado de la suma de 3+5 es =" + suma + "<br>"+ "<br>")
document.write(`★★★★★★★★ <br> <br>`)

//& 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

let persona = prompt("Por favor ingresa tu nombre");
if (persona != null) { document.write("Hola " + persona + "!" + "<br>"+ "<br>");}
document.write(`★★★★★★★★ <br> <br>`)

//& 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let num1 = parseInt(prompt("Por favor ingresa un número"));
let num2 = parseInt(prompt("Por favor ingresa otro número"));
let sumando=num1+num2;
document.write("El resultado de la suma entre los primeros 2 números es =" + sumando + "<br>"+ "<br>")
document.write(`★★★★★★★★ <br> <br>`)

//& 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

if (num1>num2){
    document.write(`el primer número ingresado es el mayor de los dos primeros<br> <br>`)
}else if(num1<num2){
    document.write(`el segundo número ingresado es el mayor de los dos primero<br> <br>`)
}else{
    document.write(`Los dos primeros números ingresados son iguales <br> <br>`)
}
document.write(`★★★★★★★★ <br> <br>`)

//& 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num3 = parseInt(prompt("Por favor ingresa un tercer número"));

if (num1>num2 && num1>num3){
    document.write(`El primer número ingresado es el mayor <br> <br>`)
}else if(num1<num2 && num2>num3){
    document.write(`El segundo número ingresado es el mayor <br> <br>`)
}else if(num1<num3 && num2<num3){
    document.write(`El tercer número ingresado es el mayor <br> <br>`)
}else{
    document.write(`Los tres números ingresados son iguales <br> <br>`)
}
document.write(`★★★★★★★★ <br> <br>`)

//& 8. Escribe un programa que pida un número y diga si es divisible por 2 
let esDivisible = parseInt(prompt("¿Es Divisible? Por favor ingresa un nuevo número:"));

if(esDivisible%2 ==0){
    document.write(`El Número ${esDivisible} SÍ es divisible <br> <br>`)
} else{
    document.write(`El Número ${esDivisible} NO es divisible <br> <br>`)
}
document.write(`★★★★★★★★ <br> <br>`)

//& 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a 

let frase = prompt("Contador de Letra A: Ingresa una frase: ");
let letra="a";
let cuentaLetra=0;

for (let i = 0; i < frase.length; i++) {
    if(frase[i]==letra || frase[i]==letra.toUpperCase()){
        cuentaLetra+=1;
    }    
}
if (frase.includes(letra) || frase.includes(letra.toUpperCase())){
console.log(document.write(`La frase "${frase}" tiene ${cuentaLetra} letras A <br> <br>`))    }
else{
    console.log(document.write(`La frase "${frase}" no tiene letras A <br> <br>`))
}    
document.write(`★★★★★★★★ <br> <br>`)

//& 10. Escribe un programa que pida una frase y escriba las vocales que aparecen 

let frase2 = prompt("VOCALES: Ingresa una nueva frase: ");
let vocalesPresentes=[];
let contadorVocales=0;

for (let i = 0; i < frase2.length; i++) {
    let vocales=["a","e","i","o","u"];
    for (let j = 0; j < vocales.length; j++) {      
        if(frase2[i] == vocales[j] || frase2[i] == vocales[j].toUpperCase()){
            vocalesPresentes.push(vocales[j]);
            contadorVocales+=1;
    }    
}}

if (vocalesPresentes.length >= 1 ){
    console.log(document.write(`La frase "${frase2}" tiene presentes ${contadorVocales} vocales, y son las siguientes: ${vocalesPresentes} <br> <br>`))
}else{
    console.log(document.write(`La frase "${frase2}" no tiene vocales.<br> <br>`))
}    

document.write(`★★★★★★★★ <br> <br>`)

//& 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
//hecho en el anterior

//& 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
 

//& 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

//&  14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

//& 15. Escribir un programa que escriba en pantalla los divisores de un número dado

//& 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

//& 17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

//& 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir

//& 19. Pide una nota (número). Muestra la calificación según la nota:
/*
    ● 0-3: Muy deficiente
    ● 3-5: Insuficiente
    ● 5-6: Suficiente
    ● 6-7: Bien
    ● 7-9: Notable
    ● 9-10: Sobresaliente
*/

//& 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

//& 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//& 22. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento Nacional de Identidad). El algoritmo para calcular la letra del dni es el siguiente :
// ● El número debe ser entre 0 y 99999999
// ● Debemos calcular el resto de la división entera entre el número y el número 23.
// ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// ● Si lo introducido no es un número deberá indicarse con un alert y volver anpreguntar.
// ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar». 

//& 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 
/*
1
22
333
4444
55555
666666
…….
*/

//& 24. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
/*
666666
55555
4444
333
22
1
*/

//& 25. Un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
/*
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/