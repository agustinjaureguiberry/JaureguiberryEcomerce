// -----------------------  Creacion de clases utilizadas -----------------------


class productos {
    constructor(codigo, nombre, precio, stock) {
        this.cod = codigo;
        this.descripcion = nombre;
        this.precio = precio;
        this.stock = stock;
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
    const modificaHTML = document.querySelector("#listaDePrecios")
    modificaHTML.innerHTML = `<thead>
                                    <tr>
                                    <th scope="col" colspan="2" style="text-align: left;">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">ADD </th>
                                    </tr>
                                </thead>
                                <tbody id="listaDePrecios">
                                </tbody>`
    array.forEach((producto) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${producto.descripcion}</th><th scope="col" style="color:rgb(0,0,0)">$${producto.precio}</th><th scope="col" style="color:rgb(0,0,0)"><lord-icon src="https://cdn.lordicon.com/aoggitwj.json"
        trigger="click" colors="primary:#CD3CE4" style="width:40px;height:40px">
    </lord-icon></th>`
        modificaHTML.append(tr)
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
let producto
let cantidad
let cuota
let PrecioEfec
let codCuotas
let sigue = false
let repeat = false
let error = false
let Continue = true



const btnCargar = document.querySelector("#btnCargar")
muestraProd(arrayProductos)

btnCargar.addEventListener("click", () => {
    const cod = document.querySelector("#productoId")
    const desc = document.querySelector("#descripcionId")
    const prec = document.querySelector("#precioId")
    const stock = document.querySelector("#stockId")
    agregaproducto(arrayProductos, cod.value, desc.value, prec.value, stockId.value)
    muestraProd(arrayProductos)
})

const modalContainer = document.getElementById("nuevoProducto")
const btnAbrir = document.getElementById("btnAbrir")

btnAbrir.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalCarga")
    modalContainer.classList.add("modalVisible")
    modalCarga.classList.remove("modalCargaVisible")
})

const btnCerrar = document.getElementById("btnCerrar")

btnCerrar.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalCarga")
    modalContainer.classList.remove("modalVisible")
    modalCarga.classList.remove("modalCargaVisible")
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