
//calculadora de puntos
export function calcularPuntos (datos) {
    if (!datos) return

    let nuevosDatos = {...datos}
    //ponemos una fecha con hora 6:00
    const normalizarFecha = (fecha) => {
        let nuevaFecha = fecha
        if (nuevaFecha.getHours <= 6) {
            nuevaFecha.setDate(ultimaFecha.getDate() - 1)
        }
        nuevaFecha.setHours(6)
        nuevaFecha.setMinutes(0);
        nuevaFecha.setSeconds(0);
        nuevaFecha.setMilliseconds(0);
        return nuevaFecha
    }

    //recuperamos la fecha del último registro y la normalizamos
    let ultimaFecha = new Date(Date.parse(datos.puntos.fecha))
    //ultimaFecha = new Date('2024-2-5')
    ultimaFecha = normalizarFecha(ultimaFecha)

    //normalizamos la fecha de la consulta actual
    const hoyFecha = normalizarFecha(new Date())

    //calculamos los puntos de cada día que ha pasado desde el último registro
    if (ultimaFecha.getTime() == hoyFecha.getTime()) return datos
    while (ultimaFecha.getTime() != hoyFecha.getTime()) {
        nuevosDatos = puntosDia(nuevosDatos, ultimaFecha)
        ultimaFecha.setDate(ultimaFecha.getDate() + 1)
    }
    return nuevosDatos
}

//devuelve el porcentaje de tareas completadas en una lista
function porcentajeLista(datos, lista) {
    if (!datos) return
    //combinamos tareas y rutinas
    const todasTareas = [...datos[`rutinas${lista}`], ...datos[`tareas${lista}`]]
    let porcentajeCompletados
    let tareaCount = 0
    let completadoCount = 0
    todasTareas.forEach(tarea => {
        tareaCount++
        if (tarea.completado) completadoCount++
    })
    //selección algoritmo
    if (tareaCount == 0) return null
    porcentajeCompletados =  completadoCount / tareaCount * 100
    return porcentajeCompletados
}

//limpia una lista (desmarca rutinas y borra tareas)
function limpiaLista (datos, lista) {
    let nuevosDatos = {...datos}
    nuevosDatos['tareas' + lista] = nuevosDatos['tareas' + lista].filter(tarea => tarea.completado == false)
    nuevosDatos['rutinas' + lista] = nuevosDatos['rutinas' + lista].map(rutina => ({ ...rutina, completado: false }));
    return nuevosDatos
}

//calcula los puntos de un día y actualiza los datos
function puntosDia (datos, fecha) {
    if (!datos) return
    let puntosGanados = 0
    let nuevosDatos = {...datos}
    let porcentaje
    const multiplicador = (porcentaje) => {
        if (porcentaje < 33) return -1
        if (porcentaje > 66) return 1
        else return 0
    }

    //puntos diarios
    porcentaje = porcentajeLista(nuevosDatos, 'dia')
    if (porcentaje === null) puntosGanados += 0
    else puntosGanados += multiplicador(porcentaje)
    nuevosDatos = {...limpiaLista(nuevosDatos, 'dia')}
    //reporte
    if (porcentaje == null) console.log('sin tareas diarias')
    else console.log(multiplicador(porcentaje) + ' puntos por tareas diarias')

    //puntos semanales (lunes)
    if (fecha.getDay() == 1) {
        porcentaje = porcentajeLista(nuevosDatos, 'sem')
        if (porcentaje === null) puntosGanados += 0
        else if (porcentaje == 100) puntosGanados += 6
        else puntosGanados += multiplicador(porcentaje) * 5
        nuevosDatos = limpiaLista(nuevosDatos, 'sem')
        //reporte
        if (porcentaje == null) console.log('sin tareas semanales')
        else if (porcentaje == 100) console.log('6 puntos por semana perfecta')
        else console.log(multiplicador(porcentaje) * 5 + ' puntos por tareas semanales')
    }
    //puntos mensuales (dia 1)
    if (fecha.getDate() == 1) {
        porcentaje = porcentajeLista(nuevosDatos, 'mes')
        if (porcentaje === null) puntosGanados += 0
        else if (porcentaje == 100) puntosGanados += 13
        else puntosGanados += multiplicador(porcentaje) * 12
        nuevosDatos = limpiaLista(nuevosDatos, 'mes')
        //reporte
        if (porcentaje == null) console.log('sin tareas mensuales')
        else if (porcentaje == 100) console.log('13 puntos por mes perfecto')
        else console.log(multiplicador(porcentaje) * 12 + ' puntos por tareas mensuales')
    }
    //puntos anuales
    if (false) return


    nuevosDatos.puntos.totales += puntosGanados
    return nuevosDatos
}
