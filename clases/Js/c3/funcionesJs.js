function sumar(a, b){   
    //var a = 5;
    //var b= 19;
    var resultado = a + b;
    console.log("el resultado es :", resultado);
}
sumar(2, 3);

function sumarX(num1, num2, num3=0){   
    //var a = 5;
    //var b= 19;
    var resultado = num1 + num2 + num3;
    console.log("el resultado es :", resultado);
}
sumarX(2, 3);


function esPar(numero){
    let par; 
    if(numero%2==0){
        par = true;
    }else{
        par = false;
    }
    return par;
}
console.log(esPar(1));

function calcularArea(l1, l2){
    let area = l1*l2
    return area;
}
console.log("El area es: "+calcularArea(3,4))

function volumen(area, longitud){
    return area*longitud;
}

let vol = volumen(calcularArea(3,4), 10)

//! FUNCIONES FLECHA

let calcular_area=(l1,l2)=>l1*l2;

//! FUNCIONES ANONIMAS
//hacer un ejemplo