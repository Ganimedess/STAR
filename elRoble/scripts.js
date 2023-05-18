/*
cositas que pueden hacerse necesarias:
1________________________________________________________________
    algoritmo que cambia el gradiente de fondo en función de una lista de gradientes y colores predefinida
    otro que cambia el color de los círculos
    otro que mueve los círculos de manera aleatoria
2________________________________________________________________
    algoritmo que carga las actividades programadas
    otro que haga scroll lentamente por ellas cuando están en pantalla
    otro que evite el scroll al hacer hover en una tarjeta
    controlador que permita moverme de una a otra para verlas
3________________________________________________________________
    algoritmo que carga la info del json
    al hacer hover, se cambian el puntero y el fondo de las líneas
    click haces toggle en el acordeón
    al abrir algo se cierra lo demás
4________________________________________________________________
    slider cambia el texto y las imágenes, habla sobre los eventos donde ha participado el roble
    manejadores para pasar de una diapo a otra
    autoplay
*/
// hero _______________________________________________________________
// mete los datos de las actividades programadas y crea los elementos
// también añade eventos para controlar el slide con el hover
const terapia = "rgba(239, 189, 195, .5)"
const taller = "rgba(218, 224, 242, .5)"
const curso = "rgba(216, 204, 245, .5)"
const evento = "rgba(188, 232, 240, .5)"

let numTarjetas = 0
let currentTarget = 0
const container = document.querySelector("#contenedor-actividades")
async function llenarActividades() {
    let contenedor = document.querySelector('#contenedor-actividades');
    // parsear el excel y asignar los valores a variables
    const response = await fetch('datos.csv');
    const data = await response.text();
    const table = data.split('\r\n').slice(1);
    let colorCabecera
    table.forEach(elt => {
        const row = elt.split(';');
        const tipo = row[0];
        const titulo = row[1];
        const descripcion = row[2];
        const profesor = row[3];
        const horario = row[4];
        const precio = row[5];
        switch (tipo) {
            case "terapia": colorCabecera = terapia
                break
            case "taller": colorCabecera = taller
                break
            case "evento": colorCabecera = evento
                break
            case "curso": colorCabecera = curso
                break
        }

        if(tipo == undefined || titulo == undefined) return;
        // armar las tarjetas y añadirlas al dom
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('p-0', 'pe-3', 'pb-4');
        tarjeta.innerHTML = '<article class="actividad card border-white shadow background-white">' +
                                `<div class="card-header border-0" style="background-color:${colorCabecera}">` +
                                    `<span class="tipo-actividad float-end">${tipo}</span>` +
                                    `<span class="card-title nombre-actividad fs-4 fw-semibold">${titulo}</span>` +
                                '</div>' +
                                '<div class="card-body">' +
                                    `<p class="card-text descripcion-actividad">${descripcion}</p>` +
                                    `<p class="card-text horarios-actividad fw-semibold">${horario}</p>` +
                                    `<p class="card-link profesor-actividad mb-0">${profesor}</p>` +
                                '</div>' +
                            '</article>';
        contenedor.appendChild(tarjeta);
        tarjeta.addEventListener('mouseenter', stopSlide)
        tarjeta.addEventListener('mouseleave', inicioSlide)
        ++numTarjetas
    })
}
function llenarIndicador() {
    const lista = document.querySelector('#indicador-actividades ul')
    for(i=0; i<numTarjetas; i++) {
        const navElt = document.createElement('li')
        navElt.appendChild(document.createElement('span'));
        navElt.addEventListener('click', scrollToElement);
        lista.appendChild(navElt)
    }
    const elementos = lista.querySelectorAll('li')
    elementos[0].querySelector('span').classList.add('currentListElement')
}
function scrollToElement() {
    const listaInd = document.querySelectorAll('#indicador-actividades span')
    listaInd[currentTarget].classList.remove('currentListElement')
    let child = this
    var i = 0;
    while( (child = child.previousElementSibling) != null ) i++; // get index of indicator
    currentTarget = i;
    listaInd[currentTarget].classList.add('currentListElement')
    tarjetas = container.querySelectorAll('.actividad')
    let objetivo = tarjetas[i]
    container.scroll(objetivo.offsetLeft - container.offsetLeft, 0)
    
}







function scrollLeft() {
    const tarjetas = document.querySelectorAll('.actividad')
    const indicadores = document.querySelectorAll('#indicador-actividades span')
    indicadores[currentTarget].classList.remove('currentListElement')
    if (currentTarget == 0) currentTarget = tarjetas.length -1
    else --currentTarget
    container.scroll(tarjetas[currentTarget].offsetLeft - container.offsetLeft, 0)
    indicadores[currentTarget].classList.add('currentListElement')
}
function scrollRight() {
    const tarjetas = document.querySelectorAll('.actividad')
    const indicadores = document.querySelectorAll('#indicador-actividades span')
    indicadores[currentTarget].classList.remove('currentListElement')
    if (currentTarget == tarjetas.length -1) currentTarget = 0
    else ++currentTarget
    container.scroll(tarjetas[currentTarget].offsetLeft - container.offsetLeft, 0)
    indicadores[currentTarget].classList.add('currentListElement')
}
// control para iniciar/terminar el movimiento automático del slider
let actividadesInterval
function inicioSlide() {
    actividadesInterval = setInterval(scrollRight, 5000)
}
function stopSlide() {
    clearInterval(actividadesInterval)
}
const scrollIz = document.querySelector("#scroll-actividades-iz");
const scrollDe = document.querySelector("#scroll-actividades-de");
scrollIz.addEventListener('click', scrollLeft);
scrollIz.addEventListener('click', () => {stopSlide(); inicioSlide()});
scrollDe.addEventListener('click', scrollRight);
scrollDe.addEventListener('click', () => {stopSlide(); inicioSlide()});
// ajustar el margen del último elemento para que el slider llegue a la última tarjeta
llenarActividades()
.then(() => {
    const arrayTarjetas = document.querySelectorAll('.actividad');
    const ultimaTarjeta = arrayTarjetas[arrayTarjetas.length - 1]
    ultimaTarjeta.style.marginRight = '1000px'
    container.scroll(0,0)
})
.then(() => {llenarIndicador()});
inicioSlide()






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
        let formatoHTML = ""
        for(j = 0; j < formato.length; j++) {
            switch(formato[j]) {
                case "taller" : 
                    formatoHTML += "<span style='background-color:"+taller+"' class = 'formato-tag'>taller</span>"
                    break
                case "terapia" :
                    formatoHTML += "<span style='background-color:"+terapia+"' class = 'formato-tag'>terapia</span>"
                    break
                case "curso" :
                    formatoHTML += "<span style='background-color:"+curso+"' class = 'formato-tag'>curso</span>"
                    break
            }
        }

        const info = document.createElement('li')
        info.classList.add('info-line', 'list-group', 'list-group-flush')

        info.innerHTML =    '<button class="bloque-act border-white w-100 px-4 d-flex align-items-center justify-content-between list-group-item list-group-item-action bg-transparent">' +
                                `<span class="nombre-act fs-4 col-7">${nombre}</span>` +
                                `<span class="tipo-act fs-6 col-sm-3 col-5 text-end">${formatoHTML}</span>` +
                            '</button>' +
                            `<div class="descripcion-act h-0 bg-white"><p class="p-sm-4 p-2 mx-4">${descripcion}</p><div>`

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






let slides = document.querySelectorAll(".slide")
let slider = document.querySelector("#carousel-body")

async function slideRight() {
    slider.scroll(slides[1].offsetLeft - slider.offsetLeft , 0)
    await setTimeout( () => {
        slider.appendChild(slides[0])
        slides = document.querySelectorAll(".slide")
    }, 450 )
}

function slideLeft() {
    slider.prepend(slides[slides.length -1])
    slides = document.querySelectorAll(".slide")
    slider.scroll(0,0)
}

const carouselBack = document.querySelector("#carousel-back")
const carouselForward = document.querySelector("#carousel-forward")
carouselBack.addEventListener('click', slideLeft)
carouselForward.addEventListener('click', slideRight)

/*
// slide ______________________________________________________________
//controla las diapositivas
let slider = document.querySelector("#carousel-body")
let currentSlide = 0
const numSlides = slider.querySelectorAll('.slide').length -1

function slideRight() {
    let slides = document.querySelectorAll('.slide')
    if (currentSlide == numSlides) currentSlide = 0
    else ++currentSlide
    slider.scroll(slides[currentSlide].offsetLeft - slider.offsetLeft, 0)
}
function slideLeft() {
    let slides = document.querySelectorAll('.slide')
    if (currentSlide == 0) currentSlide = numSlides
    else --currentSlide
    slider.scroll(slides[currentSlide].offsetLeft - slider.offsetLeft, 0)
}

const carouselBack = document.querySelector("#carousel-back")
const carouselForward = document.querySelector("#carousel-forward")

carouselBack.addEventListener('click', slideLeft)
carouselForward.addEventListener('click', slideRight)
*/







//background control _________________________________________________
const fondo = document.querySelector('#background')
const raiz = document.querySelector('.raiz')

const corazon = document.querySelector('.corazon')
const garganta = document.querySelector('.garganta')

function cambiaFondo(element) {
    if(element.style.top == "") return
    let rPosY = parseInt(element.style.top)
    let rPosX = parseInt(element.style.left)
    let randomY = Math.random() < .5 ? 1 : -1
    let randomX = Math.random() < .5 ? 1 : -1
    if( rPosY + randomY > 0 && rPosY + randomY < fondo.offsetHeight) rPosY += randomY
    if( rPosX + randomX > 0 && rPosX + randomX < fondo.offsetWidth) rPosX += randomX
    element.style.top = `${rPosY}px`
    element.style.left = `${rPosX}px`
}

let intervaloRaiz

window.onload = function() {
    raiz.style.top = `${Math.floor( Math.random() * parseInt(fondo.offsetHeight) )}px`
    raiz.style.left = `${Math.floor( Math.random() * parseInt(fondo.offsetWidth) )}px`
    corazon.style.top = `${Math.floor( Math.random() * parseInt(fondo.offsetHeight) )}px`
    corazon.style.left = `${Math.floor( Math.random() * parseInt(fondo.offsetWidth) )}px`
    garganta.style.top = `${Math.floor( Math.random() * parseInt(fondo.offsetHeight) )}px`
    garganta.style.left = `${Math.floor( Math.random() * parseInt(fondo.offsetWidth) )}px`

    intervaloRaiz = setInterval(function(){
        cambiaFondo(raiz)
        cambiaFondo(corazon)
        cambiaFondo(garganta)
    }, 20)
}