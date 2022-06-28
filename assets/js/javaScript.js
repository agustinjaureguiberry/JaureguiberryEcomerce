// -----------------------  Creacion de clases utilizadas -----------------------


class productos {
    constructor(codigo, nombre, precio) {
        this.cod = codigo;
        this.descripcion = nombre;
        this.precio = precio;
    }
    muestra() {
        console.log(this.cod + "  -   " + this.descripcion + "   -  $" + this.precio)
    }
}


class cuotas {
    constructor(cod, descripcion, interes) {
        this.cod = cod
        this.descripcion = descripcion
        this.interes = interes
    }
    muestra() {
        console.log(this.cod + "  -   " + this.descripcion + "   -   " + this.interes + "%")

    }
    sumaInteres(precio) {
        let interes = precio * (this.interes / 100)
        return (precio + interes)
    }
    calculaCuota(precio) {
        return (precio / this.cod)
    }
}

// -----------------------  Creacion de arrays -----------------------
const agregaproducto = (array, cod, desc, precio) => {
    let nuevoProd = new productos(cod, desc, precio)
    array.push(nuevoProd)
}

const agregaCuota = (array, cod, desc, precio) => {
    let nuevaCuota = new cuotas(cod, desc, precio)
    array.push(nuevaCuota)
}




// -----------------------  Creacion de funciones necesarias -----------------------

const muestraProd = (array) => {
    modificaHTML = document.getElementById("listaDePrecios")
    array.forEach((producto) => {
        const element = document.createElement("tr")
        element.innerHTML = `<th>${producto.cod}</th><th>${producto.descripcion}</th><th>${producto.precio}</th>`
        console.log(element)
        modificaHTML.append(element)
    });

}

const precioProd = (num) => {
    switch (num) {
        case telev.cod:
            return telev.precio
            break
        case micro.cod:
            return micro.precio
            break
        case lavar.cod:
            return lavar.precio
            break
    }
}

const descripcionProd = (num) => {
    switch (num) {
        case telev.cod:
            return telev.descripcion
            break
        case micro.cod:
            return micro.descripcion
            break
        case lavar.cod:
            return lavar.descripcion
            break
    }
}


const muestraCuotas = (array) => {
    console.log("-----------------------------")
    console.log("     Interes de cuota: ")
    console.log("#  -   DESCRPCION   -  interes")
    for (let i = 0; i < array.length; i++) {
        array[i].muestra()
    }
    console.log("-----------------------------")
}



// -----------------------  Inicializacion de variables y constantes -----------------------

const arrayProductos = []
const arrayCuotas = []
const temasAplicados = ["Temas anteriores a CLASE 6", "Arrays", "Funciones", "DOM"]
let cod
let desc
let prec
let producto
let cantidad
let cuota
let PrecioEfec
let codCuotas
let sigue = false
let repeat = false
let error = false
let Continue = true



let btnCargar = document.querySelector("#btnCargar")


btnCargar.addEventListener("click", () => {
    cod = document.querySelector("#productoId")
    desc = document.querySelector("#descripcionId")
    prec = document.querySelector("#precioId")
    agregaproducto(arrayProductos, cod.value, desc.value, prec.value)
    muestraProd(arrayProductos)
})




// alert("Bienvenido usuario al desafio N°2 correspondiente a la clase N°6")
// alert("Este simulador es ingresar productos en en una lista de precios, luego podra (si desea) generar ventas en cuotas")
// alert("Agreguemos productos entonces")

// do {
//     cod = parseInt(prompt("Ingrese el codigo del producto a cargar:"))
//     error = arrayProductos.some((elem) => elem.cod === cod)
//     console.log(error)
//     while (error) {
//         alert("EL CODIGO YA EXISTE - VUELVA A INTENTARLO")
//         cod = parseInt(prompt("Ingrese el codigo del producto a cargar:"))
//         error = arrayProductos.some((elem) => elem.cod === cod)
//     }
//     desc = prompt("Ingrese el nombre o descripcion del producto: ")
//     prec = parseInt(prompt("Ingrese el precio del producto: "))
//     agregaproducto(arrayProductos, cod, desc, prec)
//     console.clear()
//     muestraProd(arrayProductos)
//     alert("PRODUCTO CARGADO")
//     sigue = prompt("Ingrese 's' para agregar otro producto o cualquier letra para finalizar.")
//     if ((sigue == "s") || (sigue == "S")) {
//         repeat = true
//     }
//     else {
//         repeat = false
//     }
// } while (repeat)

// alert("Su lista de precios ha sido cargada, en consola aparece completa.")
// console.clear()
// muestraProd(arrayProductos)
// Continue = prompt("Ingrese la letra S si desea continuar con el programa de ventas.")
// if ((Continue == "s") || (Continue == "S")) {
//     agregaCuota(arrayCuotas, 1, "01 Cuota", 0)
//     agregaCuota(arrayCuotas, 3, "03 Cuotas", 12)
//     agregaCuota(arrayCuotas, 6, "06 Cuotas", 24)
//     agregaCuota(arrayCuotas, 9, "09 Cuotas", 36)
//     agregaCuota(arrayCuotas, 12, "12 Cuotas", 48)
//     agregaCuota(arrayCuotas, 18, "18 Cuotas", 72)
//     do {
//         console.clear()
//         muestraProd(arrayProductos)
//         alert("En la consola figura la lista de productos, el codigo y el precio del mismo.")
//         cod = parseInt(prompt("Ingrese el codigo del producto que desea comprar."))
//         error = !(arrayProductos.some((elem) => elem.cod === cod))
//         while (error) {
//             alert("ERROR, ESE CODIGO NO EXISTE. VUELVA A INTENTARLO")
//             cod = parseInt(prompt("Ingrese el codigo del producto que desea comprar."))
//             error = !(arrayProductos.some((elem) => elem.cod === cod))
//         }
//         producto = arrayProductos.find((elem) => elem.cod === cod)
//         alert("Usted ha elegido: " + producto.descripcion + " a un precio de : $" + producto.precio + ".")
//         cantidad = parseInt(prompt("Ingrese la cantidad que desea:"))
//         PrecioEfec = (producto.precio * cantidad)
//         alert("El precio final es de: $" + PrecioEfec + ".")
//         muestraCuotas(arrayCuotas)
//         cod = parseInt(prompt("Ingrese la cantidad de cuotas que desea pagar:"))
//         error = !(arrayCuotas.some((elem) => elem.cod === cod))
//         while (error) {
//             alert("ERROR, ESE CODIGO NO EXISTE. VUELVA A INTENTARLO")
//             cod = parseInt(prompt("Ingrese la cantidad de cuotas que desea pagar:"))
//             error = !(arrayCuotas.some((elem) => elem.cod === cod))
//         }
//         cuota = arrayCuotas.find((elem) => elem.cod === cod)
//         let precioFinal = cuota.sumaInteres(PrecioEfec)
//         let valorCuota = cuota.calculaCuota(precioFinal, codCuotas)
//         alert("Usted ha elegido " + cuota.descripcion + " con un interes de: " + cuota.interes + "%")
//         console.log("        TICKET B")
//         console.log(" ----------------------------------------------")
//         console.log(" Item  -  DESCRIPCION  -  Cantidad  -  Subtotal")
//         console.log(" " + producto.cod + "      -  " + producto.descripcion + "      -  " + cantidad + "       -  $" + PrecioEfec)
//         console.log(" ")
//         console.log(" ")
//         console.log(" ----------------------------------------------")
//         console.log(" PRECIO FINAL: $" + cuota.sumaInteres(PrecioEfec))
//         console.log(" Financiacion: " + cuota.descripcion + " - Interes: " + cuota.interes + "%")
//         console.log(" Valor de cuota: " + cuota.calculaCuota(cuota.sumaInteres(PrecioEfec)))
//         alert("En consola figura el detalle de su compra.")
//         sigue = prompt("Ingrese 's' para continuar o cualquier letra para finalizar.")
//         if ((sigue == "s") || (sigue == "S")) {
//             repeat = true
//         }
//         else {
//             repeat = false
//         }

//     } while (repeat)
// }