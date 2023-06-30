container = document.querySelector('#personajes')

async function fillPersonajes() {

    const response = await fetch('datos-personajes.json')
    const data = await response.text()
    let dataParsed = JSON.parse(data)

    for (i=0; i < dataParsed.personalidades.length; i++) {
        const tipo = dataParsed.personalidades[i].tipo
        
        for (j=0; j < dataParsed.personalidades[i].personajes.length; j++) {
            
            const nombreImagen = dataParsed.personalidades[i].personajes[j].url
            const nombre = dataParsed.personalidades[i].personajes[j].nombre

            const elemento = document.createElement('article')
            elemento.classList.add('col-lg-2', 'col-md-3', 'col-4')

            elemento.innerHTML =    `<img loading="lazy" src="/assets/personajes/${nombreImagen}.jpg" class="w-100 rounded-3">` +
                                    `<p class="fs-5 text-capitalize">${tipo} - ${nombre}</p>` 

            container.appendChild(elemento)
        }
    }
}
fillPersonajes()