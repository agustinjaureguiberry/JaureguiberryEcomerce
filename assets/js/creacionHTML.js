// Creacion del HTML - con teoria de clase DOM 

let modificaHTML = document.body

modificaHTML = document.getElementById("temasVistos")

temasAplicados.forEach((tema) => {
    const li = document.createElement('li')
    li.innerText = tema
    li.className = "lista"
    modificaHTML.append(li)
})




