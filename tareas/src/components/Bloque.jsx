import Lista from './Lista.jsx'
import PropTypes from 'prop-types';
//import { useState } from 'react';

function Bloque({titulo, modo, datos}) {

    //función para el guardado de datos
    const guardaDatos = (tituloLista, objetoLista) => {
        let datosGlobal = JSON.parse(localStorage.getItem('infoTareas'))
        datosGlobal[`${tituloLista}`] = objetoLista
        //almacenamiento de los datos en caché
        localStorage.setItem('infoTareas', JSON.stringify(datosGlobal))
    }

    return(
        <section className='interfaz'>
            <h4 className='tituloLista roboto-mono text-left'>{titulo}</h4>
            <div className="rutinas">
                <Lista
                titulo={'rutinas'+titulo}
                editable={modo}
                datosGuardados={datos}
                backUpFunc={guardaDatos}/></div>
            <div className='tareas'>
                <Lista
                titulo={'tareas'+titulo}
                editable={!modo}
                datosGuardados={datos}
                backUpFunc={guardaDatos}/></div>
        </section>
    )
}

Bloque.propTypes = {
    titulo: PropTypes.string.isRequired,
    modo: PropTypes.bool.isRequired,
    datos: PropTypes.object.isRequired,
}

export default Bloque