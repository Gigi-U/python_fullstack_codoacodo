console.log("------------------------PRÁCTICA ------------------------");

let a = 10;
let b = 5;

if (a == b) {
    console.log("a y b son iguales")    
}else{
    console.log("a y b NO son iguales")
}

console.log("------------------------------------------------");

let c = 10;
let d = "10";

if (c == d) {
    console.log("c y d son iguales")    
}else{
    console.log("c y d NO son iguales")
}
console.log("------------------------------------------------");


let edad = 21;
let mensaje = "";

if(edad>20){
    mensaje= "es mayor de edad, no necesita permiso para salir del país."+ "<br>"+ "<br>";
    console.log(document.write(mensaje));

} else if (edad > 17 && edad<21) {
    mensaje = "es mayor de 18 pero necesita autorización para viajar."+ "<br>"+ "<br>";
    console.log(document.write(mensaje));

} else { 
    mensaje ="es Menor de edad."+ "<br>"+ "<br>";
    console.log(document.write(mensaje));

}

console.log("---------------------SWITCH---------------------------");


var mensajee="";
let sandwich = prompt("Por favor ingresa tipo de sandwich (carne | vegetariano | vegano)");
let precio=400;

if (((typeof sandwich) === "string")) {
    switch (sandwich) {
        case "carne":
            mensajee = `Pediste un sandwich de ${sandwich} y cuesta ${precio+200}`;            
            break;
        case "vegetariano":
            mensajee =`Pediste un sandwich ${sandwich} y cuesta ${precio+100}`;
        case "vegano":
                mensajee =`Pediste un sandwich ${sandwich} y cuesta ${precio+150}`;                          
        default:
            break;
    }    
};

console.log(document.write(mensajee))
