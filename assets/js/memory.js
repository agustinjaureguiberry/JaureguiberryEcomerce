// -----------------------  Creacion de arrays ----------------------- //
const agregaproducto = (array, cod, desc, precio, stock) => {
    let nuevoProd = new productos(cod, desc, precio, stock)
    array.push(nuevoProd)
}

const agregaCuota = (array, cod, desc, precio) => {
    let nuevaCuota = new cuotas(cod, desc, precio)
    array.push(nuevaCuota)
}

const agregaCarrito = (id) => {
    const producto = arrayProductos.find((prod) => prod.cod == id)
    producto.cantidad = 1
    arrayCarrito.push(producto)
    muestraCarrito(arrayCarrito)
    precioTotal()
}

const quitaCarrito = (id) => {
    const i = arrayCarrito.indexOf(arrayCarrito.find((elem) => elem.cod === id))
    arrayCarrito.splice(i, 1)
    muestraCarrito(arrayCarrito)
    precioTotal()
}

// ----------------------- Inicializacion de memoria ----------------------- //

const arrayProductos = []

const arrayCuotas = []

const arrayCarrito = []