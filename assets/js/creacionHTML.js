// ----------------------- FUNCIONES DE LISTA DE PRECIOS Y CARRITO -----------------------

const muestraProd = (array) => {
    let modificaHTML = document.querySelector("#listaDePrecios")
    modificaHTML.innerHTML = `<thead>
                                    <tr>
                                    <th scope="col" colspan="2" style="text-align: left;">Producto</th>
                                    <th scope="col">Precio </th>
                                    <th scope="col">ADD </th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyLdp">
                                </tbody>`
    modificaHTML = document.querySelector("#tbodyLdp")
    array.forEach((producto) => {
        const { precio, descripcion, cod } = producto
        const tr = document.createElement("tr")
        tr.innerHTML = `<th colspan="2" scope="col" style="padding-left:5px; text-align: left; color:rgb(0,0,0)">${descripcion}</th>
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
            <th scope="col" style="color:rgb(0,0,0)"><input id="inputCantidad" type="number" value="1"></input></th>
            <th scope="col" style="color:rgb(0,0,0)">$${precio}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">$${((precio) * (cantidad))}</input></th>
            <th scope="col" style="color:rgb(0,0,0)">
            <lord-icon onclick="quitaCarrito(${cod})" src="https://cdn.lordicon.com/dovoajyj.json" trigger="hover" colors="primary:#21288a" state="morph-fill" style="width:40px;height:40px">
</lord-icon>
            </th>`
            modificaHTML.append(tr)
        })
    }

};
