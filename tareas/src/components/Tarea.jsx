import PropTypes from 'prop-types';
import { useState } from 'react';

function Tarea({indice, children, pasaInfo}) {
    //almacena si la tarea está marcada o no, para tachar el texto de manera acorde
    const [marcada, editMarcada] = useState(false)
    const handleCheck = (e) => editMarcada(e.target.checked)
    //función para pasar info hacia 'arriba' (lista)
    const editarTarea = () => {
        editMarcada(false)
        pasaInfo(indice, children)
    }
    /*
    const [valor, editValor] = useState(children)
    const editarTarea = (nuevoValor) => {
        editValor(nuevoValor)
    }
    */

    return(
    <label htmlFor={indice} className={`text-left w-full no-select ${marcada ? 'line-through' : ''}`} onDoubleClick={editarTarea}>
        <input onChange={handleCheck} id={indice} type="checkbox" checked={marcada} />{children}
    </label>
    )
}

Tarea.propTypes = {
    children: PropTypes.node.isRequired,
    indice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pasaInfo: PropTypes.func.isRequired,
};

export default Tarea