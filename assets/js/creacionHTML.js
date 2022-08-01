// ----------------------- FUNCIONES DE LISTA DE PRECIOS Y CARRITO -----------------------

const muestraProd = (array) => {
    let modificaHTML = document.querySelector("#listaDePrecios")
    modificaHTML.innerHTML = `<thead>
                                    <tr>
                                    <th scope="col" colspan="2" style="text-align: left;">Producto</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Precio </th>
                                    <th scope="col">ADD </th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyLdp">
                                </tbody>`
    modificaHTML = document.querySelector("#tbodyLdp")
    array.forEach((producto) => {
        const { precio, descripcion, cod, stock } = producto
        const tr = document.createElement("tr")
        tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${descripcion}</th>
        <th scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${stock}</th>
        <th scope="col" style="color:rgb(0,0,0)">$${precio}</th>
        <th scope="col" style="color:rgb(0,0,0)">
        <lord-icon onclick="agregaCarrito(${cod})" src="https://cdn.lordicon.com/aoggitwj.json"
        trigger="click" colors="primary:#CD3CE4" style="width:40px;height:40px">
        </lord-icon>
        </th>`
        modificaHTML.append(tr)
    });
}

const muestraCarrito = (array) => {
    var memoriaLocal = localStorage.getItem("carrito")
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
            const { precio, descripcion, cod, cantidad } = producto
            const tr = document.createElement("tr")
            tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${descripcion}</th>
            <th scope="col" style="color:rgb(0,0,0)"><input onchange="cambiaCarrito(${cod})" id="${cod}" type="number" value="${parseInt(cantidad)}" class="inputCantidad" /></th>
            <th scope="col" style="color:rgb(0,0,0)">$${precio}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">$${((precio) * (cantidad))}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">
            <lord-icon onclick="quitaCarrito(${cod})"src="https://cdn.lordicon.com/dovoajyj.json" trigger="hover" colors="primary:#21288a" state="morph-fill" style="width:40px;height:40px">
</lord-icon>
            </th>`
            modificaHTML.append(tr)
        })
    }

};


const creaTicket = (array) => {
    const ticket = document.getElementById("ticket")
    ticket.innerHTML = `
    <div id="ticket" class="datosFiscales">
        <h3><B>DATOS FISCALES:</B></h3>
        <p>Razon social: AllMacen S.A.</p>
        <p>Cuit: 30-30303030-6</p>
        <p>Direccion: Calle Falsa 123</p>
        <p>Fecha de inicio de actividad: 01/01/2022</p>
    </div>
    <div class="datosCliente">
        <h3><B>FACTURA "B" COD.05</B></h3>
        <P>N° 005-0002550</P>
        <P id="fecha"></P>
        <P>CLIENTE: Consumidor final</P>
        <p>Forma de pago: Contado </p>
    </div>
    <div id="productosContainer" class="datosProductos">
        
    </div> `
    const listaTicket = document.getElementById("productosContainer")
    arrayCarrito.forEach((producto) => {
        const { precio, descripcion, cod, cantidad } = producto
        const etiquetaP = document.createElement("p")
        etiquetaP.innerHTML = `<p>${producto.cantidad} - ${producto.descripcion} - $${producto.precio} </p><p>Subtotal: $${producto.precio * producto.cantidad} </p>`
        listaTicket.append(etiquetaP)
    })
    const etiquetadiv = document.createElement("div")
    etiquetadiv.className = "precioTicket"
    etiquetadiv.innerHTML = `<p>Precio total: $${precioTotal()}</p>`
    ticket.append(etiquetadiv)
    const modalTicket = document.getElementById("modalTicket")
    modalTicket.classList.add("modalVisible")
    const tiempo = DateTime.now()
    const fecha = document.querySelector("#fecha")
    fecha.innerText = `Fecha y hora: ${tiempo.toLocaleString(DateTime.DATETIME_SHORT)}`

}

