// -----------------------  Creacion de clases utilizadas ----------------------- //

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
// ----------------------- Funciones principales ----------------------- //

const precioTotal = () => {
    let total = arrayCarrito.reduce((acum, elem) => acum + elem.precio, 0)
    sumaCarrito.innerText = total
}


// -----------------------  Inicializacion de variables y constantes ----------------------- //
let producto
let cantidad
let cuota
let PrecioEfec
let codCuotas
let sigue = false
let repeat = false
let error = false
let Continue = true

fetch('./../assets/js/ldp.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((elem) => {
            arrayProductos.push(elem)
        })
        muestraProd(arrayProductos)
    })



agregaCuota(arrayCuotas, 1, "01 Cuota", 0)
agregaCuota(arrayCuotas, 3, "03 Cuotas", 12)
agregaCuota(arrayCuotas, 6, "06 Cuotas", 24)
agregaCuota(arrayCuotas, 9, "09 Cuotas", 36)
agregaCuota(arrayCuotas, 12, "12 Cuotas", 48)
agregaCuota(arrayCuotas, 18, "18 Cuotas", 72)



/// FUNCIONALIDAD MODAL ///


const modalContainer = document.getElementById("nuevoProducto")
const btnAbrir = document.getElementById("btnAbrir")

btnAbrir.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalCarga")
    modalContainer.classList.add("modalVisible")
})

const btnCerrar = document.getElementById("btnCerrar")

btnCerrar.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalCarga")
    modalContainer.classList.remove("modalVisible")
})

const btnCargar = document.querySelector("#btnCargar")
muestraProd(arrayProductos)

btnCargar.addEventListener("click", () => {
    const cod = document.querySelector("#productoId")
    const desc = document.querySelector("#descripcionId")
    const prec = document.querySelector("#precioId")
    const stock = document.querySelector("#stockId")
    let resultado = arrayProductos.some((elem) => elem.cod === parseInt(cod.value))
    if (resultado) {
        Swal.fire({
            icon: 'error',
            title: 'El codigo ya existe',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        agregaproducto(arrayProductos, parseInt(cod.value), desc.value, parseInt(prec.value), parseInt(stockId.value))
        muestraProd(arrayProductos)
        Swal.fire({
            icon: 'success',
            title: 'El Producto se cargó correctamente!',
            showConfirmButton: false,
            timer: 1500
        })
    }
})


// FUNCIONALIDAD GENERAL //

var DateTime = luxon.DateTime

const sumaCarrito = document.querySelector("#sumaCarrito")

const btnComprar = document.querySelector("#btnComprar")




btnComprar.addEventListener("click", () => {
    if (arrayCarrito.length != 0) {
        const modalTicket = document.getElementById("modalTicket")
        modalTicket.classList.add("modalVisible")
        const tiempo = DateTime.now()
        const fecha = document.querySelector("#fecha")
        fecha.innerText = `Fecha y hora: ${tiempo.toLocaleString(DateTime.DATETIME_SHORT)}`


        arrayCarrito.splice(0, (arrayCarrito.length))
        muestraCarrito(arrayCarrito)
        precioTotal()
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Agregue productos para generar una venta',
            showConfirmButton: false,
            timer: 2000
        })
    }
})

const btnCerrarTicket = document.getElementById("btnCerrarTicket")

btnCerrarTicket.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalTicket")
    modalTicket.classList.remove("modalVisible")
})




const search = document.querySelector("#search")

search.addEventListener("input", () => {
    if ((search.value == 0) || (search.value == undefined)) {
        muestraProd(arrayProductos)
    } else {
        const nuevoArray = []
        arrayProductos.forEach((elem) => {
            let palabra = elem.descripcion.toLowerCase()
            if (palabra.match(search.value.toLowerCase())) {
                nuevoArray.push(elem)
            }
        })
        muestraProd(nuevoArray)
    }
}
)

