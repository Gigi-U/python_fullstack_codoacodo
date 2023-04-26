
//! OBJETOS 

let mascota = new Object ()

mascota.nombre="lola",
mascota.edad = 1,

console.log(mascota)

if (mascota.edad >3){
    console.log("la mascota es mayor de 3 años")
}
// otra manera de crear un objeto
let auto = {
    id:"101",
    color:"rojo",
    marca:"ford",
    valor:2000000,
    cuantoskilometros(){
        return "tiene 10.000km de uso"
    },
    decirDatos(){
        let precioVenta = this.valor*1.3
        return "El id es: "+this.id+", "+"| El color es: "+this.color+ "| El valor de venta es: "+precioVenta
    }

}
auto["año"]="1980;"
console.log(auto)
console.log(auto.cuantoskilometros())
console.log(auto.decirDatos())


//! CLASES
class Alumno{   

    constructor(dni, nombre, materia, carrera){
        this.dni=dni
        this.nombre=nombre  
        this.materia=materia
        this.carrera=carrera
    }   
    saludar(){
        let texto= `Soy ${this.nombre} , soy estudiante de la carrera  ${this.carrera} y estoy cursando ${this.materia}`;
        return texto
    } 
}

const alumni1 = new Alumno(27943381,"Cosme Fulanito","Javascript","Desarrollo Web Fullstack") 
console.log(alumni1.saludar());

//! OBJETO STRING

const cadena = "pepe -";
let cadena2=new String("Hola Codo");
console.log(cadena.length)
console.log(cadena.charAt(2))
console.log(cadena.concat(cadena,cadena2))
console.log(cadena.indexOf(cadena))
console.log(cadena.indexOf(cadena, 2))

console.log(cadena.lastIndexOf(cadena2,3))
.repeat(2)
.toLowerCase()
.toUpperCase()
.trim()
.replace(cadena,"nueva")

//! objeto Math

//practicarlo