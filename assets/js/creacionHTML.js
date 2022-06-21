// Creacion del HTML - con teoria de clase DOM 

let modificaHTML = document.body

let element = document.createElement("div")
element.id = "divContainer"
element.className = "contentGrid"
modificaHTML.append(element)
element.innerHTML = "<header><img src='./assets/img/imagen.webp' alt='Imagen de e-commerce'></header>"

modificaHTML = document.getElementById("divContainer")

element = document.createElement("main")
modificaHTML.append(element)
element.innerHTML = `<h1>Proyecto final</h1>
                    <h2></h2>
                    <ul id="temasVistos"></ul>
                    <img src="./assets/img/construccion.jpg" alt="Imagen de pagina en">
                    <h2>Proximamente</h2>`

modificaHTML = document.getElementById("temasVistos")

temasAplicados.forEach((tema) => {
    const li = document.createElement('li')
    li.innerText = tema
    li.className = "lista"
    modificaHTML.append(li)
})

modificaHTML = document.getElementById("divContainer")

element = document.CreateElement("footer")
modificaHTML.append(element)
element.innerHTML = `<h2>Disculpe las molestias</h2>`

