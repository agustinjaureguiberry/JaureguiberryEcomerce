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

// -----------------------  Creacion de funciones necesarias -----------------------

const muestraProd = (array) => {
    let modificaHTML = document.querySelector("#listaDePrecios")
    modificaHTML.innerHTML = `<thead>
                                    <tr>
                                    <th scope="col" colspan="2" style="text-align: left;">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">ADD </th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyLdp">
                                </tbody>`
    modificaHTML = document.querySelector("#tbodyLdp")
    array.forEach((producto) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${producto.descripcion}</th>
        <th scope="col" style="color:rgb(0,0,0)">$${producto.precio}</th>
        <th scope="col" style="color:rgb(0,0,0)">
        <lord-icon onclick="agregaCarrito(${producto.cod})" src="https://cdn.lordicon.com/aoggitwj.json"
        trigger="click" colors="primary:#CD3CE4" style="width:40px;height:40px">
        </lord-icon>
        </th>`
        modificaHTML.append(tr)
    });
}

const muestraCarrito = (array) => {
    let modificaHTML = document.querySelector("#tablaCarrito")
    modificaHTML.innerHTML = ` <thead>
                                        <tr>
                                            <th scope="col" colspan="2" style="text-align: left;">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio U.</th>
                                            <th scope="col">Sub total</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodycarrito">
                                    </tbody>`
    modificaHTML = document.querySelector("#tbodycarrito")
    if (array.length != 0) {
        array.forEach((producto) => {
            const tr = document.createElement("tr")
            tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${producto.descripcion}</th>
            <th scope="col" style="color:rgb(0,0,0)"><input id="inputCantidad" type="number" value="1"></input></th>
            <th scope="col" style="color:rgb(0,0,0)">$${producto.precio}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">$${((producto.precio) * (producto.cantidad))}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">
            <lord-icon onclick="quitaCarrito(${producto.cod})" src="https://cdn.lordicon.com/dovoajyj.json" trigger="hover" colors="primary:#21288a" state="morph-fill" style="width:40px;height:40px">
</lord-icon>
            </th>`
            modificaHTML.append(tr)
        })
    }

};

const precioTotal = () => {
    let total = 0
    arrayCarrito.forEach((elem) => {
        total += elem.precio
    })

    sumaCarrito.innerText = total
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
    modalCarga.classList.remove("modalCargaVisible")
})

const btnCerrar = document.getElementById("btnCerrar")

btnCerrar.addEventListener("click", () => {
    const modalCarga = document.getElementById("modalCarga")
    modalContainer.classList.remove("modalVisible")
    modalCarga.classList.remove("modalCargaVisible")
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
        alert("ERROR, EL CODIGO YA EXISTE")
    } else {
        agregaproducto(arrayProductos, parseInt(cod.value), desc.value, parseInt(prec.value), parseInt(stockId.value))
        muestraProd(arrayProductos)
        alert("El Producto se cargó correctamente!")
    }
})


// FUNCIONALIDAD GENERAL //


const sumaCarrito = document.querySelector("#sumaCarrito")

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", () => {
    if (arrayCarrito.length != 0) {
        alert("La compra ha sido exitosa")
        arrayCarrito.splice(0, (arrayCarrito.length))
        muestraCarrito(arrayCarrito)
        precioTotal()
    } else {
        alert("Agregue productos a la lista para generar compra")
    }
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
