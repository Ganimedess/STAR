
// hero _______________________________________________________________
// mete los datos de las actividades programadas y crea los elementos
// también añade eventos para controlar el slide con el hover

const terapia = "rgba(239, 189, 195, .5)"
const taller = "rgba(218, 224, 242, .5)"
const curso = "rgba(216, 204, 245, .5)"
const evento = "rgba(188, 232, 240, .5)"


const INTERVALO = 5000
let carouselTarget = 0



// actividades _______________________________________________________________
let actividadesIz = document.querySelector("#actividades-iz")
let actividadesDe = document.querySelector("#actividades-de")
let listaActividades = document.querySelectorAll("#actividades li")
const ActividadAnterior = () => {
    for(let i = 0; i < listaActividades.length; i++) {
        if(!listaActividades[i].classList.contains('d-none')) {
            let n = (i-1 + listaActividades.length) % listaActividades.length
            listaActividades[i].classList.add('d-none')
            listaActividades[n].classList.remove('d-none')
            break
        }
    }
}
const ActividadSiguiente = () => {
    for(let i = 0; i < listaActividades.length; i++) {
        if(!listaActividades[i].classList.contains('d-none')) {
            let n = (i+1) % listaActividades.length
            listaActividades[i].classList.add('d-none')
            listaActividades[n].classList.remove('d-none')
            break
        }
    }
}
actividadesIz.addEventListener('click', ActividadAnterior)
actividadesDe.addEventListener('click', ActividadSiguiente)


// info _______________________________________________________________
//llena la lista con la informacion del archivo json
async function llenarInformacion(){
    const contenedor = document.querySelector("#contenedor-informacion")
    const response = await fetch('terapias.json')
    const data = await response.text()
    let dataParsed = JSON.parse(data)

    for(i = 0; i < dataParsed.terapias.length; i++) {
        const nombre = dataParsed.terapias[i].nombre
        const descripcion = dataParsed.terapias[i].descripcion
        const formato = dataParsed.terapias[i].formato

        const info = document.createElement('li')
        info.classList.add('info-line', 'list-group', 'list-group-flush')

        info.innerHTML =    '<button class="bloque-act w-100 px-4 d-flex align-items-center justify-content-between list-group-item list-group-item-action bg-white bg-opacity-50">' +
                                `<span class="nombre-act fs-4 col-7 fw-semibold tx-tone">${nombre}</span>` +
                            '</button>' +
                            `<div class="descripcion-act h-0 bg-white"><p class="p-sm-4 p-2 mx-4 fw-normal tx-tone">${descripcion}</p><div>`

        contenedor.appendChild(info)
        info.querySelector('button').addEventListener('click', acordeon)
    }
}
function acordeon(e) {
    const infoLines = document.querySelectorAll('.info-line')
    let currentLine = e.target
    while (currentLine.nodeName != 'LI') {
        currentLine = currentLine.parentNode
    }
    const description = currentLine.parentNode.querySelector('.descripcion-act')

    infoLines.forEach((line) => {
        if(line != currentLine) {
            line.querySelector('.descripcion-act').classList.add('h-0')
        }
        else line.querySelector('.descripcion-act').classList.toggle('h-0')
    })
}
function reescalarDescripcion() {
    const descripciones = document.querySelectorAll('.descripcion-act')
    descripciones.forEach((descripcion) => {
        const newHeight = descripcion.querySelector('p').offsetHeight + 20 + "px"
        descripcion.style.height = newHeight
    })
}

llenarInformacion()
.then(() => { reescalarDescripcion() })

window.addEventListener('resize', () => { reescalarDescripcion() })




//galería _______________________________________________________________
let ANCHOTARJETA = 480;
const galeriaScroll = document.querySelector('#galeria ul')
const flechaIz = document.querySelector('#galeria-iz')
const flechaDe = document.querySelector('#galeria-de')
flechaIz.addEventListener('click', () => {
    ANCHOTARJETA = document.querySelector('#galeria li').offsetWidth
    galeriaScroll.scroll(galeriaScroll.scrollLeft - ANCHOTARJETA, 0)
})
flechaDe.addEventListener('click', () => {
    ANCHOTARJETA = document.querySelector('#galeria li').offsetWidth
    galeriaScroll.scroll(galeriaScroll.scrollLeft + ANCHOTARJETA, 0)
})

