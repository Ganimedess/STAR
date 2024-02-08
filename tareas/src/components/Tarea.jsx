import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

function Tarea({indice, children, pasaInfo, deletea, completado}) {
    const tarea = useRef(null)
    //almacena si la tarea está marcada o no, para tachar el texto de manera acorde
    const [marcada, editMarcada] = useState(false)
    const handleCheck = (e) => {
        editMarcada(e.target.checked)
        //pasamos la info a la lista
        completado(indice, e.target.checked)
    }
    //función para pasar info hacia 'arriba' (lista)
    const editarTarea = () => {
        editMarcada(false)
        pasaInfo(indice, children)
    }
    const borrarTarea = () => {
        deletea(indice)
    }
    //implementación del 'doble click' pero en móvil
    //sirve para editar una tarea
    let touchStartTime = 0;
    const handleTouchStart = () => {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - touchStartTime;
        if (timeDiff < 300) { // Si el tiempo entre el inicio del toque y el final es menor a 300ms, considera esto como un doble toque
        editarTarea();
        }
        touchStartTime = currentTime;
    };
    //devuelve las tareas a su estado original a los 3 seg de hacer scroll
    const handleTouchEnd = () => {
        if (tarea.current && tarea.current.scrollLeft > 0.1 * tarea.current.scrollWidth) setTimeout(() => {
            tarea.current.scrollTo(0,0)
        }, 3000)
    }

    return(
    <div ref={tarea} className='cajaTarea'>
        <label
        htmlFor={indice}
        className={`text-left w-full no-select ${marcada ? 'line-through' : ''}`}
        onDoubleClick={editarTarea}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
            <input onChange={handleCheck} id={indice} type="checkbox" checked={marcada} />
            {children}
        </label>
        <button className='buttonDelete' onClick={borrarTarea}>Eliminar</button>
    </div>
    )
}

Tarea.propTypes = {
    children: PropTypes.node.isRequired,
    indice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pasaInfo: PropTypes.func.isRequired,
    deletea: PropTypes.func.isRequired,
    completado: PropTypes. func.isRequired,
};

export default Tarea