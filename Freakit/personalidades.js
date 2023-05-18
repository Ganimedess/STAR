
container = document.querySelector('#personalidades')

async function fillPersonajes() {

    const response = await fetch('datos-personajes.json')
    const data = await response.text()
    let dataParsed = JSON.parse(data)

    for (i=0; i < dataParsed.personalidades.length; i++) {
        const tipo = dataParsed.personalidades[i].tipo
        const descripcion = dataParsed.personalidades[i].descripcion
        const nombreImagen = dataParsed.personalidades[i].personajes[0].url

        const elemento = document.createElement('article')
        elemento.classList.add('col-lg-3', 'col-md-4', 'col-6')

        elemento.innerHTML =    `<div class="foto-personalidad"><img loading="lazy" src="/assets/personajes/${nombreImagen}.jpg" class="w-100"></div>` +
                                `<div class="my-1 py-1"><!----------></div>` +
                                `<p class="fs-5">Personalidad tipo ${i+1}: ${tipo}</p>` +
                                `<p class="fs-6">${descripcion}</p>`

        container.appendChild(elemento)
    }
}
fillPersonajes()