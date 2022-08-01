// -----------------------  Creacion de arrays ----------------------- //
const agregaproducto = (array, cod, desc, precio, stock) => {
    let nuevoProd = new productos(cod, desc, precio, stock)
    array.push(nuevoProd)
}

const AlmacenLocal = () => {

}

const controlStock = (producto, cant, boolean) => {
    if (boolean == true) {
        if (producto.stock >= cant) {
            return true
        } else {
            return false
        }
    } else {
        stockInicial = arrayCodigoStock.find((prod) => prod.cod == producto.cod)
        producto.stock = parseInt(stockInicial.stock)
        if (producto.stock >= cant) {
            producto.cant = parseInt(cant)
            return true
        } else {
            return false
        }
    }
}

const agregaCarrito = (id) => {
    const producto = arrayProductos.find((prod) => prod.cod == id)
    const control = controlStock(producto, 1, true)
    if (control == true) {
        if (arrayCarrito.some((e) => e.cod === id)) {
            producto.cantidad = parseInt(producto.cantidad) + 1
            producto.stock -= 1
        } else {
            producto.stock -= 1
            producto.cantidad = 1
            arrayCarrito.push(producto)
        }
        localStorage.setItem("carrito", arrayCarrito)
        muestraCarrito(arrayCarrito)
        muestraProd(arrayProductos)
        precioTotal()
        Toastify({
            text: "Producto agregado al carrito",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #069c1a, #18800f)",
            }
        }).showToast();
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No hay mas stock',
            showConfirmButton: false,
            timer: 2000
        })
    }
}

const quitaCarrito = (id) => {
    const i = arrayCarrito.indexOf(arrayCarrito.find((elem) => elem.cod === id))
    arrayCarrito.splice(i, 1)
    const producto = arrayProductos.find((elem) => elem.cod === id)
    producto.cant = 0
    stock = arrayCodigoStock.find((elem) => elem.cod === id)
    producto.stock = parseInt(stock.stock)
    localStorage.setItem("carrito", arrayCarrito)
    muestraCarrito(arrayCarrito)
    muestraProd(arrayProductos)
    precioTotal()
    Toastify({
        text: "Producto removido del carrito",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(to right, #b90d0d, #e07162)",
        }
    }).showToast();
}

const cambiaCarrito = (cod) => {
    const producto = arrayCarrito.find((prod) => prod.cod == cod)
    const inputCantidad = document.getElementById(cod)
    const cant = inputCantidad.value
    const control = controlStock(producto, cant, false)
    if (control) {
        if (cant > 0) {
            producto.cantidad = parseInt(cant)
            producto.stock -= cant
            localStorage.setItem("carrito", arrayCarrito)
            muestraCarrito(arrayCarrito)
            muestraProd(arrayProductos)
            precioTotal()
            Toastify({
                text: "Cantidad modificada en el carrito",
                duration: 2000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #069c1a, #18800f)",
                }
            }).showToast();
        } else {
            quitaCarrito(cod)
        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Stock no suficiente',
            showConfirmButton: false,
            timer: 2000
        })
    }
}


// ----------------------- Inicializacion de memoria ----------------------- //

var arrayProductos = []
var arrayCodigoStock = []
const arrayCarrito = []


fetch('./../assets/js/ldp.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((elem) => {
            arrayProductos.push(elem)
            codst = { cod: elem.cod, stock: elem.stock }
            arrayCodigoStock.push(codst)
        })
        muestraProd(arrayProductos)
    })