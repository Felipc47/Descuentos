/* const precioOriginal = 100;
const descuento = 50;

const porcentajeDelPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento) / 100;

console.log ({
    precioOriginal, descuento, procentajeDelPrecioConDescuento, precioConDescuento,
});
 */

function calcularPrecioConDescuento (precio, descuento){    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (porcentajePrecioConDescuento * precio) /100;
    
    return (precioConDescuento);
}

/* function calcularDescuento () {
    const input = document.getElementById("inputPrice");
    const value = input.value;

    const input2 = document.getElementById("inputDiscount");
    const value2 = input2.value;

    const precioConDescuentoo = calcularPrecioConDescuento(value, value2);
   
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuentoo;
} */

function calcularDescuento () {
    const input = document.getElementById("inputPrice");
    const value = input.value;

    const input2 = document.getElementById("inputCoupon");
    const value2 = input2.value;

    let descuento; 

    if (value2 === "Descuentoloco") {
        descuento = 20
    } else if (value2 === "Bienvenido"){
        descuento = 50
    } else if (value2 === "Cuponmania"){
        descuento = 35
    }
    else {
        descuento = 0
    }

    const precioConDescuentoo = calcularPrecioConDescuento(value, descuento);
   
    const resultP = document.getElementById("ResultP");
    {
        descuento === 0 ? resultP.innerText = "El cupón no es valido" : 
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuentoo + ". Tu ahorro fue del: " + descuento + "%.";
    }
}

 
