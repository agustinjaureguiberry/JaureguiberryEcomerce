// -----------------------  Creacion de clases utilizadas ----------------------- //

class productos {
    constructor(codigo, nombre, precio, stock) {
        this.cod = codigo;
        this.descripcion = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// ----------------------- Funciones principales ----------------------- //

const precioTotal = () => {
    let total = arrayCarrito.reduce((acum, elem) => acum + (elem.precio * elem.cantidad), 0)
    sumaCarrito.innerText = total
    return total
}



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

btnCargar.addEventListener("click", () => {
    var cont = 0
    const cod = document.querySelector("#productoId")
    var validacion = (cod.value || false)
    if (validacion === false) {
        cont += 1
    }
    const desc = document.querySelector("#descripcionId")
    validacion = (desc.value || false)
    if (validacion === false) {
        cont += 1
    }
    const prec = document.querySelector("#precioId")
    validacion = (prec.value || false)
    if (validacion === false) {
        cont += 1
    }
    var stock = document.querySelector("#stockId")
    validacion = (stock.value || false)
    if (validacion === false) {
        stock = 1
    }
    let resultado = arrayProductos.some((elem) => elem.cod === parseInt(cod.value))

    if ((resultado) || (cont != 0)) {
        Swal.fire({
            icon: 'error',
            title: 'REVISE LOS CAMPOS',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        agregaproducto(arrayProductos, parseInt(cod.value), desc.value, parseInt(prec.value), parseInt(stockId.value))
        var codst = { cod: parseInt(cod.value), stock: parseInt(stock.value) }
        arrayCodigoStock.push(codst)
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
        creaTicket(arrayCarrito)
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
