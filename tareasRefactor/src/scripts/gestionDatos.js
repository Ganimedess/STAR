//estructura base de los datos de la app
const ESTRUCTURA_DATOS = {
    estado : {
        puntos : 0,
        fecha : new Date(),
    },
    listas : {
        'dia' : {
            rutinas : [],
            tareas : [],
        },
        'sem' : {
            rutinas : [],
            tareas : [],
        },
        'mes' : {
            rutinas : [],
            tareas : [],
        },
        'año' : {
            rutinas : [],
            tareas : [],
        },
    },
    historial : []
}

//comprueba que los datos existen y que están en el formato correcto
function comprobarDatos (datos) {
    if (!(datos && datos.listas && datos.estado && datos.historial)) {
        console.warn('el formato de los datos es incorrecto')
        return false
    }
    return true
}

//
export function guardaDatos (datos) {
    if (comprobarDatos(datos)) localStorage.setItem('TareasProductividad', JSON.stringify(datos))
    else throw new Error('error al guardar datos')
}

//carga los datos y restaura la fecha como objeto Date
//si los datos están corruptos, crea una nueva partida
export function cargaDatos () {
    let datos = JSON.parse(localStorage.getItem('TareasProductividad'))
    if (!comprobarDatos(datos)) {
        console.warn('error al cargar datos, inicio nueva partida')
        nuevaPartida()
        return ESTRUCTURA_DATOS
    }
    try { datos.estado.fecha = new Date(Date.parse(datos.estado.fecha)) }
    catch { throw new Error('Problemas al cargar datos: la fecha no existe o es incorrecta') }
    return datos
}

//
export function borraDatos () {
    localStorage.removeItem('TareasProductividad')
}

//
function nuevaPartida () {
    localStorage.setItem('TareasProductividad', JSON.stringify(ESTRUCTURA_DATOS))
}