
// hero _______________________________________________________________
// mete los datos de las actividades programadas y crea los elementos
// también añade eventos para controlar el slide con el hover
const terapia = "rgba(239, 189, 195, .5)"
const taller = "rgba(218, 224, 242, .5)"
const curso = "rgba(216, 204, 245, .5)"
const evento = "rgba(188, 232, 240, .5)"


const INTERVALO = 5000
let carouselTarget = 0

let arrayTarjetas
const container = document.querySelector("#contenedor-actividades")
async function llenarActividades() {
    let contenedor = document.querySelector('#contenedor-actividades');
    // parsear el excel y asignar los valores a variables
    const response = await fetch('actividades.json');
    const data = await response.text();
    const dataParsed = JSON.parse(data);

    let colorCabecera
    let colorVar = 0
    let mouseXpos
    let moved = false


    dataParsed.Actividades.forEach(elt => { //navegamos el array
        const titulo = elt.nombre
        const descripcion = elt.descripción
        const horario = elt.horario
        const profesor = elt.profesor

        switch (colorVar % 3) {
            case 0: colorCabecera = terapia; colorVar++;
                break
            case 1: colorCabecera = curso; colorVar++;
                break
            case 2: colorCabecera = evento; colorVar++;
                break
        }

        // armar las tarjetas y añadirlas al dom
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('d-none', 'actividad');
        tarjeta.innerHTML = '<article class="card border-white shadow background-white">' +
                                `<div class="card-header border-0" style="background-color:${colorCabecera}">` +
                                    `<p class="card-title nombre-actividad fs-4 fw-semibold">${titulo}</p>` +
                                '</div>' +
                                '<div class="card-body d-flex flex-column justify-content-between">' +
                                    `<p class="card-text descripcion-actividad">${descripcion}</p>` +
                                    `<div class="info-actividad">` +
                                        `<p class="card-text horarios-actividad fw-semibold mb-0">${horario}</p>` +
                                        `<p class="card-link profesor-actividad mb-0">${profesor}</p>` +
                                    `</div>` +
                                '</div>' +
                            '</article>';
        contenedor.appendChild(tarjeta);
        tarjeta.addEventListener('mouseenter', stopSlide) //añadimos las funciones js
        tarjeta.addEventListener('mouseleave', inicioSlide)


        tarjeta.addEventListener('mousedown', (e) => {
            mouseXpos = e.clientX
        })
        tarjeta.addEventListener('mouseup', (e) => {
            if(e.clientX + 20 < mouseXpos) scrollRight()
            else if (e.clientX - 20 > mouseXpos) scrollLeft()
        })
        tarjeta.addEventListener('touchstart', (e) => {
            mouseXpos = e.touches[0].screenX
            moved = false
        })
        tarjeta.addEventListener('touchmove', (e) => {
            if(e.touches[0].screenX + 20 < mouseXpos) {
                if(moved) return
                scrollRight()
                mouseXpos = e.touches[0].screenX
                moved = true
            }
            else if (e.touches[0].screenX - 20 > mouseXpos) {
                if(moved) return
                scrollLeft()
                mouseXpos = e.touches[0].screenX
                moved = true
            }
        })
    })
}

let actividadesInterval
function inicioSlide() {
    actividadesInterval = setInterval(scrollRight, INTERVALO)
}
function stopSlide() {
    clearInterval(actividadesInterval)
}

llenarActividades()
.then(() => {llenarIndicador()})
.then(() => {
    scrollToElement(carouselTarget);
})
inicioSlide()

function scrollToElement(target) {
    arrayTarjetas = document.querySelectorAll('.actividad');
    let leftTarget = (carouselTarget - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    let rightTarget = (carouselTarget + 1) % arrayTarjetas.length;
    arrayTarjetas[carouselTarget].classList.replace("carousel-mid", "d-none")
    arrayTarjetas[leftTarget].classList.replace("carousel-left", "d-none")
    arrayTarjetas[rightTarget].classList.replace("carousel-right", "d-none")

    carouselTarget = target
    let newLeftTarget = (target - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    let newRightTarget = (target + 1) % arrayTarjetas.length;
    arrayTarjetas[target].classList.replace("d-none", "carousel-mid");
    arrayTarjetas[newLeftTarget].classList.replace("d-none", "carousel-left");
    arrayTarjetas[newRightTarget].classList.replace("d-none", "carousel-right");
    actualizarIndicador()
}
function scrollLeft() {
    let newTarget = (carouselTarget - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    let leftTarget = (newTarget - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    let rightTarget = (newTarget + 1) % arrayTarjetas.length;
    let overRigt = (rightTarget + 1) % arrayTarjetas.length;
    arrayTarjetas[leftTarget].classList.replace("d-none", "carousel-left");
    arrayTarjetas[newTarget].classList.replace("carousel-left", "carousel-mid");
    arrayTarjetas[rightTarget].classList.replace("carousel-mid", "carousel-right");
    arrayTarjetas[overRigt].classList.replace("carousel-right", "d-none")
    carouselTarget = newTarget;
    actualizarIndicador()
}
function scrollRight() {
    let newTarget = (carouselTarget + 1) % arrayTarjetas.length;
    let leftTarget = (newTarget - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    let rightTarget = (newTarget + 1) % arrayTarjetas.length;
    let overLeft = (leftTarget - 1 + arrayTarjetas.length) % arrayTarjetas.length;
    arrayTarjetas[overLeft].classList.replace("carousel-left", "d-none")
    arrayTarjetas[leftTarget].classList.replace("carousel-mid", "carousel-left");
    arrayTarjetas[newTarget].classList.replace("carousel-right", "carousel-mid");
    arrayTarjetas[rightTarget].classList.replace("d-none", "carousel-right");
    carouselTarget = newTarget;
    actualizarIndicador()
}
function llenarIndicador() {
    indicador = document.querySelector("#indicador-actividades ul")
    tarjetas = document.querySelectorAll(".actividad")
    for(let i = 0; i < tarjetas.length; i++) {
        const elt = document.createElement("li")
        const elt2 = document.createElement("span")
        elt.addEventListener('click', () =>{
            let parent = elt.parentNode
            let index = Array.prototype.indexOf.call(parent.children, elt);
            scrollToElement(index)

        })
        elt.appendChild(elt2)
        indicador.appendChild(elt)
    }
    primerPunto = document.querySelector("#indicador-actividades ul span")
    primerPunto.classList.add("currentListElement")
}
function actualizarIndicador() {
    tarjetas = document.querySelectorAll(".actividad")
    indicadores = document.querySelectorAll("#indicador-actividades ul span")
    for(let i = 0; i < tarjetas.length; i++) {
        indicadores[i].classList.remove("currentListElement")
        if(tarjetas[i].classList.contains('carousel-mid')) {
            indicadores[i].classList.add("currentListElement")
        }
    }
}


// control para iniciar/terminar el movimiento automático del slider
const scrollIz = document.querySelector("#scroll-actividades-iz");
const scrollDe = document.querySelector("#scroll-actividades-de");
scrollIz.addEventListener('click', scrollLeft);
scrollIz.addEventListener('click', () => {stopSlide(); inicioSlide()});
scrollDe.addEventListener('click', scrollRight);
scrollDe.addEventListener('click', () => {stopSlide(); inicioSlide()});








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









//carousel _______________________________________________________________
let slides = document.querySelectorAll(".slide")
let slider = document.querySelector("#carousel-body")

slider.scroll(1000, 1000)
let currentSlide = 0

function slideLeft() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    leftSlide = (currentSlide - 1 + slides.length) % slides.length
    rightSlide = (currentSlide + 1) % slides.length
    overRight = (rightSlide + 1) % slides.length
    slides[currentSlide].classList.replace('sliderLeft', 'sliderMid')
    slides[currentSlide].classList.remove('entradaIzquierda')
    slides[leftSlide].classList.replace('d-none', 'sliderLeft')
    slides[leftSlide].classList.add('entradaIzquierda')
    slides[rightSlide].classList.replace('sliderMid', 'sliderRight')
    slides[overRight].classList.replace('sliderRight', 'd-none')
    slides[overRight].classList.remove('entradaDerecha')
}
function slideRight() {
    currentSlide = (currentSlide + 1) % slides.length
    leftSlide = (currentSlide - 1 + slides.length) % slides.length
    rightSlide = (currentSlide + 1) % slides.length
    overLeft = (leftSlide - 1 + slides.length) % slides.length
    slides[currentSlide].classList.replace('sliderRight', 'sliderMid')
    slides[currentSlide].classList.remove('entradaDerecha')
    slides[leftSlide].classList.replace('sliderMid', 'sliderLeft')
    slides[rightSlide].classList.replace('d-none', 'sliderRight')
    slides[rightSlide].classList.add('entradaDerecha')
    slides[overLeft].classList.replace('sliderLeft', 'd-none')
    slides[overLeft].classList.remove('entradaIzquierda')
}

const carouselBack = document.querySelector("#carousel-back")
const carouselForward = document.querySelector("#carousel-forward")
carouselBack.addEventListener('click', slideLeft)
carouselForward.addEventListener('click', slideRight)


slides.forEach((slide) => {
    slide.addEventListener('mousedown', (e) => {
        mouseXpos = e.clientX
    })
    slide.addEventListener('mouseup', (e) => {
        if(e.clientX + 20 < mouseXpos) slideRight()
        else if (e.clientX - 20 > mouseXpos) slideLeft()
    })
    slide.addEventListener('touchstart', (e) => {
        mouseXpos = e.touches[0].screenX
        moved = false
    })
    slide.addEventListener('touchmove', (e) => {
        if(e.touches[0].screenX + 20 < mouseXpos) {
            if(moved) return
            slideRight()
            mouseXpos = e.touches[0].screenX
            moved = true
        }
        else if (e.touches[0].screenX - 20 > mouseXpos) {
            if(moved) return
            slideLeft()
            mouseXpos = e.touches[0].screenX
            moved = true
        }
    })
})






