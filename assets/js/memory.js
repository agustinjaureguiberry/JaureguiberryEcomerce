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
    console.log(arrayCarrito)
    precioTotal()
}

// ----------------------- Inicializacion de memoria ----------------------- //

const arrayProductos = [{ cod: 1, descripcion: "Leche La Serenisima entera 1 L", precio: 135, stock: 10 },
{ cod: 2, descripcion: "Harina 0000 Blancaflor x 1 Kg", precio: 140, stock: 10 },
{ cod: 3, descripcion: "Pan lactal Bimbo x 500 grs ", precio: 220, stock: 10 },
{ cod: 4, descripcion: "Yerba Rosamonte x 500 grs", precio: 200, stock: 10 },
{ cod: 5, descripcion: "Yerba Rosamonte x 1 Kg", precio: 380, stock: 10 },
{ cod: 6, descripcion: "Dulce de leche Sancor x 500 grs", precio: 175, stock: 10 },
{ cod: 7, descripcion: "Mermelada Arcor x 500 grs", precio: 230, stock: 10 },
{ cod: 8, descripcion: "Arroz Tres Hermanos x 1 Kg", precio: 98, stock: 10 },
{ cod: 9, descripcion: "Azucar Ledesma x 1 Kg", precio: 140, stock: 10 },
{ cod: 10, descripcion: "Chocolate Cadbury x 82 grs", precio: 365, stock: 10 },
{ cod: 11, descripcion: "Arroz Tres Hermanos x 1 Kg", precio: 98, stock: 10 },
{ cod: 12, descripcion: "Azucar Ledesma x 1 Kg", precio: 140, stock: 10 },
{ cod: 13, descripcion: "Chocolate Cadbury x 82 grs", precio: 365, stock: 10 }]

const arrayCuotas = []

const arrayCarrito = []